export const setAnswerForNextQuestions = (saveQuestionIds, data, resFields) => {
  saveQuestionIds.forEach((i) => {
    if (i === data.id) {
      resFields[`${i}`] = data.selectedAnswer[0].title;
    }
  });
  return resFields;
};
