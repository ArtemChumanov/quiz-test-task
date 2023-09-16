import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAnswerForNextQuestions } from "@/helpers";
import { idsSaveAnswers } from "@/config";
import { IAnswerUser, IAnswerUserState } from "@/types";

const initialState: IAnswerUserState = {
  answersUsers: [],
  fieldForNextQuestions: {},
};

export const userAnswerSlice = createSlice({
  name: "AnswersSlice",
  initialState,
  reducers: {
    setUserAnswer(state, { payload }: PayloadAction<IAnswerUser>) {
      state.answersUsers = [...state.answersUsers, payload];
      state.fieldForNextQuestions = setAnswerForNextQuestions(
        idsSaveAnswers,
        payload,
        state.fieldForNextQuestions,
      );
    },
    clearUserAnswers(state) {
      state.answersUsers = [];
    },
    removeLastAnswer(state, { payload }: PayloadAction<string>) {
      state.answersUsers = state.answersUsers.filter((i) => i.id !== payload);
    },
  },
});

export const { setUserAnswer, clearUserAnswers, removeLastAnswer } =
  userAnswerSlice.actions;

export default userAnswerSlice.reducer;
