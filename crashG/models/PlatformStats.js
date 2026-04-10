const mongoose = require('mongoose');

const platformStatsSchema = new mongoose.Schema({
  _id:               { type: String, default: 'global' },
  totalEnrolled:     { type: Number, default: 0 },
  totalQuizzesTaken: { type: Number, default: 0 },
  lastUpdated:       { type: Date, default: Date.now },
});

module.exports = mongoose.model('PlatformStats', platformStatsSchema);
