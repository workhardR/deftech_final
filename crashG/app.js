require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app = express();

// ── MIDDLEWARE ─────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── API ROUTES ─────────────────────────────────────────────
app.use('/api/auth',     require('./routes/auth.routes'));
app.use('/api/courses',  require('./routes/course.routes'));
app.use('/api/progress', require('./routes/progress.routes'));
app.use('/api',          require('./routes/stats.routes'));

// ── CATCH-ALL → serve frontend SPA ────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
