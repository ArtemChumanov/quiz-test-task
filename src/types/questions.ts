export interface IQuestions {
  id: string;
  questionTitle: string;
  subtitle?: string;
  answers: IAnswer[];
  nextQuestionId: string;
  severalAnswer?: boolean;
  dependentByAnswer?: boolean;
}

export interface IAnswer {
  id: string;
  title: string;
  nextQuestionId: string;
}
