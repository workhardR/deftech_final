function computeAchievements(prog) {
  const sv  = [...prog.quizScores.values()];
  const avg = sv.length ? Math.round(sv.reduce((a, b) => a + b, 0) / sv.length) : 0;
  const earned = [];
  if (prog.completedCourses.length >= 1) earned.push('first_course');
  if (prog.completedCourses.length >= 5) earned.push('all_courses');
  if (sv.some(s => s === 100))           earned.push('perfect_quiz');
  if (avg >= 80 && sv.length >= 3)       earned.push('high_avg');
  if (sv.length >= 1)                    earned.push('first_quiz');
  if (sv.length >= 3)                    earned.push('three_quizzes');
  if (sv.length >= 5)                    earned.push('all_quizzes');
  if (prog.quizScores.has('missile-tech')) earned.push('missile_done');
  return earned;
}

function serializeProgress(prog) {
  return {
    moduleProgress:   Object.fromEntries(prog.moduleProgress),
    quizScores:       Object.fromEntries(prog.quizScores),
    completedCourses: prog.completedCourses,
    quizHistory:      prog.quizHistory,
    achievements:     prog.achievements,
  };
}

module.exports = { computeAchievements, serializeProgress };
