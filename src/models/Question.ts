// src/models/Question.ts
export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  questionText: string;
  answers: Answer[];
}
