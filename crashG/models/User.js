const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:       { type: String, required: true, trim: true },
  email:      { type: String, required: true, unique: true, lowercase: true, trim: true },
  password:   { type: String, required: true },
  role:       { type: String, enum: ['student', 'admin'], default: 'student' },
  enrolledAt: { type: Date, default: Date.now },
  lastLogin:  { type: Date },
}, { timestamps: true });

userSchema.methods.toSafeObject = function () {
  return { id: this._id, name: this.name, email: this.email, role: this.role, enrolledAt: this.enrolledAt };
};

module.exports = mongoose.model('User', userSchema);
