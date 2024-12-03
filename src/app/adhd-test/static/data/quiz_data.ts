import quiz_data from '@/app/adhd-test/static/data/quiz_data.json';

export interface Category {
  categoryText: string;
  questionCount: number;
}

export enum ScreenType {
  SingleChoiceQuestion = 'single_choice_question',
  SingleChoiceStatementQuestion = 'single_choice_statement_question',
  MultipleChoiceQuestion = 'multiple_choice_question',
  FeedbackScreen = 'feedback_screen',
  EndOfSection1 = 'end_of_section_type_of_screen_1',
  EndOfSection2 = 'end_of_section_type_of_screen_2',
  TailoredScreen = 'tailored_screen',
}

export interface Step {
  answers?: Answer[];
  slug: string;
  number: number;
  screenType: string;
  questionText?: string;
  numberInCategory?: number;
  categoryText?: string;
  conditionTag?: string;
  conditionQuestion?: string | number;
  optionType?: string;
  important?: boolean;
  questionImageId?: string;
}

export interface Answer {
  answerText: string;
  answerScore: number;
  answerImageId?: string;
}

interface QuizData {
  overallSteps: number;
  quizSteps: number;
  categories: Category[];
  steps: Step[];
}

// export const getFirstQuizSlug = () => {
//   const gender = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_GENDER) ?? '';
//   const femaleSlug = QUIZ_STEPS.find(
//     (i) => i.number === 1 && i.conditionTag === 'female'
//   ).slug;
//
//   const maleSlug = QUIZ_STEPS.find(
//     (i) => i.number === 1 && i.conditionTag === 'male'
//   ).slug;
//
//   return gender.toLowerCase() === 'female' ? femaleSlug : maleSlug;
// };
export const QUIZ_DATA: QuizData = quiz_data;

export const OVERALL_STEPS: number = QUIZ_DATA.overallSteps;
export const COUNT_QUIZ_STEPS: number = QUIZ_DATA.quizSteps;

export const QUIZ_CATEGORIES: Category[] = QUIZ_DATA.categories;

export const QUIZ_STEPS: Step[] = QUIZ_DATA.steps;
