const router  = require('express').Router();
const COURSES = require('../data/courses');
const QUIZZES = require('../data/quizzes');
const Progress = require('../models/Progress');
const PlatformStats = require('../models/PlatformStats');
const authMiddleware = require('../middleware/auth');
const { computeAchievements, serializeProgress } = require('../utils/helpers');

// GET /api/progress  [protected]
router.get('/', authMiddleware, async (req, res) => {
  try {
    const prog = await Progress.findOne({ userId: req.user.id });
    if (!prog) return res.status(404).json({ success: false, message: 'Progress record not found.' });
    res.json({ success: true, progress: serializeProgress(prog) });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// POST /api/progress/module  { courseId, moduleIndex }  [protected]
router.post('/module', authMiddleware, async (req, res) => {
  try {
    const { courseId, moduleIndex } = req.body;
    const course = COURSES.find(c => c.id === courseId);
    if (!course) return res.status(400).json({ success: false, message: 'Invalid courseId.' });

    const prog = await Progress.findOne({ userId: req.user.id });
    if (!prog) return res.status(404).json({ success: false, message: 'Progress record not found.' });

    const current = prog.moduleProgress.get(courseId) || 0;
    const newVal  = moduleIndex >= current ? moduleIndex + 1 : current;
    prog.moduleProgress.set(courseId, newVal);

    if (newVal >= course.modules && !prog.completedCourses.includes(courseId))
      prog.completedCourses.push(courseId);

    await prog.save();
    res.json({ success: true, completedModules: newVal, courseComplete: newVal >= course.modules });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// POST /api/quiz/submit  { courseId, answers: [0,2,1,...] }  [protected, server-graded]
router.post('/quiz/submit', authMiddleware, async (req, res) => {
  try {
    const { courseId, answers } = req.body;
    const questions = QUIZZES[courseId];
    if (!questions)
      return res.status(400).json({ success: false, message: 'Invalid courseId.' });
    if (!Array.isArray(answers) || answers.length !== questions.length)
      return res.status(400).json({ success: false, message: `Expected ${questions.length} answers.` });

    // Grade on the server
    const results = questions.map((q, i) => ({
      correct: answers[i] === q.ans,
      correctIndex: q.ans,
      explanation: q.exp,
    }));
    const correctCount = results.filter(r => r.correct).length;
    const score  = Math.round((correctCount / questions.length) * 100);
    const grade  = score >= 90 ? 'Distinction' : score >= 70 ? 'Merit' : score >= 50 ? 'Pass' : 'Fail';

    const prog = await Progress.findOne({ userId: req.user.id });
    if (!prog) return res.status(404).json({ success: false, message: 'Progress record not found.' });

    // Best score logic
    const prev      = prog.quizScores.get(courseId);
    const isNewBest = prev === undefined || score > prev;
    if (isNewBest) prog.quizScores.set(courseId, score);

    // History (keep last 20)
    const courseName = COURSES.find(c => c.id === courseId)?.title || courseId;
    prog.quizHistory.unshift({ courseId, courseName, score, totalQuestions: questions.length, correctAnswers: correctCount });
    if (prog.quizHistory.length > 20) prog.quizHistory = prog.quizHistory.slice(0, 20);

    // Auto-complete all modules when quiz is taken
    const course = COURSES.find(c => c.id === courseId);
    if (course) {
      if ((prog.moduleProgress.get(courseId) || 0) < course.modules)
        prog.moduleProgress.set(courseId, course.modules);
      if (!prog.completedCourses.includes(courseId))
        prog.completedCourses.push(courseId);
    }

    prog.achievements = computeAchievements(prog);
    await prog.save();

    await PlatformStats.findByIdAndUpdate('global', { $inc: { totalQuizzesTaken: 1 } }, { upsert: true });

    res.json({ success: true, score, grade, correctCount, total: questions.length, isNewBest, results });
  } catch (err) {
    console.error('Quiz submit error:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
