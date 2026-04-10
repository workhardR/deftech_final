const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  userName: { type: String },

  // moduleProgress: Map { 'military-rank' => 3, 'missile-tech' => 2 }
  moduleProgress: { type: Map, of: Number, default: {} },

  // quizScores: Map { 'military-rank' => 85, 'missile-tech' => 100 }
  quizScores: { type: Map, of: Number, default: {} },

  completedCourses: [{ type: String }],

  quizHistory: [{
    courseId:       String,
    courseName:     String,
    score:          Number,
    totalQuestions: Number,
    correctAnswers: Number,
    takenAt:        { type: Date, default: Date.now },
  }],

  achievements: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Progress', progressSchema);
