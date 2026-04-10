require('dotenv').config();
const app           = require('./app');
const connectDB     = require('./config/db');
const PlatformStats = require('./models/PlatformStats');

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectDB();

    // Ensure the global stats document exists
    await PlatformStats.findByIdAndUpdate('global', {}, { upsert: true });

    app.listen(PORT, () => {
      console.log(`\n⚡ DEFTECH Server → http://localhost:${PORT}`);
      console.log('\n📡 API Routes:');
      [
        'POST /api/auth/register',
        'POST /api/auth/login',
        'GET  /api/auth/me          [protected]',
        'GET  /api/stats            [public]',
        'GET  /api/courses',
        'GET  /api/courses/:id',
        'GET  /api/courses/quiz/:courseId  [protected]',
        'GET  /api/progress         [protected]',
        'POST /api/progress/module  [protected]',
        'POST /api/progress/quiz/submit  [protected, server-graded]',
        'GET  /api/dashboard        [protected]',
      ].forEach(r => console.log('  ', r));
      console.log('');
    });
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

start();