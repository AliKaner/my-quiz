export type Category = {
  id:number;
  name: string;
};

export enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard',
}

export type Option = {
  value: any;
  label: string;
};

export type Question = {
  correct_answer: string;
  incorrect_answers: string[];
  text: string;
};

export type Quiz = {
  results: Question[];
};

export type IRecordAttempt = {
  point: number;
  player: string;
  time: string;
  answers: string;
};

export type GetQuizQuery = {
    category: string;
    difficulty: string;
    type?:string;
    amount:string;
}