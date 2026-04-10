const router  = require('express').Router();
const COURSES = require('../data/courses');
const PlatformStats = require('../models/PlatformStats');
const Progress = require('../models/Progress');
const authMiddleware = require('../middleware/auth');

// GET /api/stats  [public]
router.get('/stats', async (req, res) => {
  try {
    const stats = await PlatformStats.findById('global');
    res.json({
      success: true,
      totalEnrolled:     stats ? stats.totalEnrolled     : 0,
      totalQuizzesTaken: stats ? stats.totalQuizzesTaken : 0,
      totalCourses:      COURSES.length,
      totalModules:      COURSES.reduce((a, c) => a + c.modules, 0),
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Could not fetch platform stats.' });
  }
});

// GET /api/dashboard  [protected]
router.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    const [prog, stats] = await Promise.all([
      Progress.findOne({ userId: req.user.id }),
      PlatformStats.findById('global'),
    ]);
    if (!prog) return res.status(404).json({ success: false, message: 'Progress record not found.' });

    const scoreVals = [...prog.quizScores.values()];
    const avgScore  = scoreVals.length ? Math.round(scoreVals.reduce((a, b) => a + b, 0) / scoreVals.length) : 0;
    const totalMods = [...prog.moduleProgress.values()].reduce((a, b) => a + b, 0);

    res.json({
      success: true,
      dashboard: {
        completedCourses:  prog.completedCourses,
        totalCompleted:    prog.completedCourses.length,
        quizzesTaken:      scoreVals.length,
        avgScore,
        totalModules:      totalMods,
        scores:            Object.fromEntries(prog.quizScores),
        history:           prog.quizHistory.slice(0, 10),
        achievements:      prog.achievements,
        courseProgress:    COURSES.map(c => ({
          id: c.id, title: c.title, emoji: c.emoji,
          totalModules:     c.modules,
          completedModules: prog.moduleProgress.get(c.id) || 0,
          percentage:       Math.round(((prog.moduleProgress.get(c.id) || 0) / c.modules) * 100),
          score:            prog.quizScores.get(c.id),
        })),
        platformStats: { totalEnrolled: stats ? stats.totalEnrolled : 0 },
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
