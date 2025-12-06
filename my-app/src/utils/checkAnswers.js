// Utility function to check answers for any quiz
export function checkAnswers(questions, answers) {
  let newScore = 0;

  questions.forEach((q, qIndex) => {
    const userAns = answers[qIndex];
    const correct = q.correctIndex;
    let isCorrect = false;

    if (Array.isArray(correct)) {
      const correctSet = [...correct].sort().join(",");
      const userSet = Array.isArray(userAns)
        ? [...userAns].sort().join(",")
        : "";
      isCorrect = correctSet === userSet;
    } else {
      isCorrect = userAns === correct;
    }

    if (isCorrect) newScore += 1;
  });

  return newScore;
}
