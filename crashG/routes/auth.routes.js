const router  = require('express').Router();
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const User    = require('../models/User');
const Progress = require('../models/Progress');
const PlatformStats = require('../models/PlatformStats');

const JWT_SECRET = process.env.JWT_SECRET || 'deftech_jwt_secret_change_in_production';

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    let { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
    email = email.toLowerCase().trim();
    if (password.length < 6)
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters.' });

    if (await User.findOne({ email }))
      return res.status(409).json({ success: false, message: 'An account with this email already exists.' });

    const user = await User.create({ name, email, password: await bcrypt.hash(password, 12) });

    // Each user gets their own progress document in the "progresses" collection
    await Progress.create({ userId: user._id, userName: user.name });

    // Atomically bump the global enrollment counter
    await PlatformStats.findByIdAndUpdate(
      'global',
      { $inc: { totalEnrolled: 1 }, $set: { lastUpdated: new Date() } },
      { upsert: true }
    );

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ success: true, message: 'Account created successfully!', token, user: user.toSafeObject() });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    email = email.toLowerCase().trim();

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, message: 'Login successful!', token, user: user.toSafeObject() });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ success: false, message: 'Server error during login.' });
  }
});

// GET /api/auth/me  [protected]
const authMiddleware = require('../middleware/auth');
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ success: false, message: 'User not found.' });
    res.json({ success: true, user: user.toSafeObject() });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
