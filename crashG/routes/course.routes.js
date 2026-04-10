const router  = require('express').Router();
const COURSES = require('../data/courses');
const QUIZZES = require('../data/quizzes');
const authMiddleware = require('../middleware/auth');

// GET /api/courses
router.get('/', (req, res) => {
  const { difficulty, category, search } = req.query;
  let result = [...COURSES];
  if (difficulty) result = result.filter(c => c.difficulty === difficulty);
  if (category)   result = result.filter(c => c.category.toLowerCase().includes(category.toLowerCase()));
  if (search)     result = result.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.desc.toLowerCase().includes(search.toLowerCase())
  );
  res.json({ success: true, count: result.length, courses: result });
});

// GET /api/courses/:id
router.get('/:id', (req, res) => {
  const course = COURSES.find(c => c.id === req.params.id);
  if (!course) return res.status(404).json({ success: false, message: 'Course not found.' });
  res.json({ success: true, course: { ...course, questionCount: (QUIZZES[course.id] || []).length } });
});

// GET /api/quiz/:courseId  [protected — serves questions without answers]
router.get('/quiz/:courseId', authMiddleware, (req, res) => {
  const qs = QUIZZES[req.params.courseId];
  if (!qs) return res.status(404).json({ success: false, message: 'Quiz not found for this course.' });
  // Strip answer indices before sending to client
  const clientSafe = qs.map(({ q, opts }) => ({ q, opts }));
  res.json({ success: true, questions: clientSafe });
});

module.exports = router;
