function scoreQuiz(studentAnswers, answerKey) {
  if (studentAnswers.length !== answerKey.length) {
    throw new Error("Student answers and answer key must have the same length");
  }

  if (answerKey.length === 0) {
    throw new Error("Quiz must contain at least one question");
  }

  let correct = 0;

  for (let i = 0; i < answerKey.length; i++) {
    if (studentAnswers[i] === answerKey[i]) {
      correct++;
    }
  }

  const total = answerKey.length;
  const percent = Math.round((correct / total) * 100);

  return {
    correct,
    total,
    percent,
  };
}
// expect 67
console.log(scoreQuiz(["A", "B", "C"], ["A", "B", "D"]));
// expect 100
console.log(scoreQuiz(["A", "B", "C"], ["A", "B", "C"]));
// expect 33
console.log(scoreQuiz([null, "B", "C"], ["A", "B", "D"]));
//expected error: Quiz must contain at least one question
try {
  console.log(scoreQuiz([], []));
} catch (error) {
  console.error(error.message);
}
// expected error: Student answers and answer key must have the same length
try {
  console.log(scoreQuiz(["A", "B"], ["A", "B", "C"]));
} catch (error) {
  console.error(error.message);
}
