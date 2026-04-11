const repl = require('repl');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/deftech';

mongoose.connect(MONGO_URI).then(async () => {
    console.log('\n✅ Database Connected!');
    console.log('───────────────────────────────────────────────────────');
    console.log('You are now in an interactive database terminal.');
    console.log('Available Models: User, Progress, PlatformStats');
    console.log('');
    console.log('Example commands:');
    console.log(' 1. await User.find()');
    console.log(' 2. await Progress.find()');
    console.log(' 3. await User.deleteOne({ email: "test@example.com" })');
    console.log('───────────────────────────────────────────────────────\n');

    const r = repl.start({ prompt: 'deftech-db> ', useGlobal: true });
    
    // Inject models globally
    r.context.mongoose = mongoose;
    r.context.User = require('./models/User');
    r.context.Progress = require('./models/Progress');
    r.context.PlatformStats = require('./models/PlatformStats');

    // Close db on exit
    r.on('exit', () => {
        mongoose.disconnect();
        console.log('Connection closed.');
        process.exit(0);
    });
}).catch(err => {
    console.error('Connection heavily failed:', err);
    process.exit(1);
});
