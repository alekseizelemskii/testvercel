import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { StaticImageData } from 'next/image';

export type Image =
  | StaticImageData
  | StaticImport
  | string
  | HTMLImageElement
  | File;

export interface Answer {
  text: string;
  score: number | string;
  image?: Image;
}
export interface ScreenData {
  screenType: string;
  answers?: Answer[];
  answerDesign?: string;
  category?: string;
  question?: string;
  number: number;
  numberInCategory?: number;
  conditionTag?: string;
  conditionQuestion?: number;
  questionImage: string;
  scoreTag?: string;
}

export interface Category {
  category: string;
  questionsNumber: number;
}

export interface DataObject {
  screens: ScreenData[];
  questionsNumber: number;
  categories: Category[];
}
export enum AgeRange {
  '18-21' = '18-21',
  '22-25' = '22-25',
  '26-30' = '26-30',
  '31-35' = '31-35',
  '36-40' = '36-40',
  '41-45' = '41-45',
  '46-50' = '46-50',
  '51-55' = '51-55',
  '56-60' = '56-60',
  '61-65' = '61-65',
  '66-70' = '66-70',
  '71+' = '71+',
}
