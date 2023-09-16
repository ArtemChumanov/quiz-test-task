import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { clearUserAnswers, removeLastAnswer, setUserAnswer } from "./reducer";

export const useAnswerUser = () => {
  const dispatch = useAppDispatch();

  const { answersUsers, fieldForNextQuestions } = useAppSelector(
    (state) => state.answers,
  );

  const setAnswerUserHandle = useCallback(
    (data) => {
      dispatch(setUserAnswer(data));
    },
    [dispatch],
  );

  const removeLastAnswerHandle = useCallback(
    (id) => {
      dispatch(removeLastAnswer(id));
    },
    [dispatch],
  );

  const clearAnswersHandle = () => {
    dispatch(clearUserAnswers());
  };

  return {
    answersUsers,
    setAnswerUser: setAnswerUserHandle,
    removeLastAnswer: removeLastAnswerHandle,
    clearAnswers: clearAnswersHandle,
    fieldForNextQuestions,
  };
};
