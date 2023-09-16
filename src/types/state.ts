import { IAnswer } from "./questions";

export type fieldForNextQuestionsTypes = {
  [key: string]: string;
};

export interface IAnswerUserState {
  answersUsers: IAnswerUser[];
  fieldForNextQuestions: fieldForNextQuestionsTypes;
}

export interface IAnswerUser {
  id: string;
  title: string;
  selectedAnswer: IAnswer[];
}
