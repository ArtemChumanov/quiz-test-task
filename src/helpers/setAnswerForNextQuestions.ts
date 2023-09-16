import { fieldForNextQuestionsTypes, IAnswerUser } from "@/types";

export const setAnswerForNextQuestions = (
  saveQuestionIds: string[],
  data: IAnswerUser,
  resFields: fieldForNextQuestionsTypes,
) => {
  saveQuestionIds.forEach((i) => {
    if (i === data.id) {
      resFields[`${i}`] = data.selectedAnswer[0].title;
    }
  });
  return resFields;
};
