import { feedbackImages } from '@/app/wellbeing-test/static/data/feedback_images';
import { AgeRange, Nullable } from '@/utils/types';
import { StaticImageData } from 'next/image';

interface ReviewData {
  image: StaticImageData;
  reviewer: string;
  review: string;
  city: string;
  age: number;
}

export const reviewDataSelector = (
  ageRange: Nullable<AgeRange | string>
): ReviewData[] => {
  const ageRangeMapping: Record<string, ReviewData[]> = {
    '18-21': [
      reviews.fml_16_25,
      reviews.ml_16_25,
      reviews.fml_26_35,
      reviews.ml_26_35,
    ],
    '22-25': [
      reviews.fml_16_25,
      reviews.ml_16_25,
      reviews.fml_26_35,
      reviews.ml_26_35,
    ],
    '26-30': [
      reviews.fml_26_35,
      reviews.ml_26_35,
      reviews.fml_35_45,
      reviews.ml_35_45,
    ],
    '31-35': [
      reviews.fml_26_35,
      reviews.ml_26_35,
      reviews.fml_35_45,
      reviews.ml_35_45,
    ],
    '36-40': [
      reviews.fml_35_45,
      reviews.ml_35_45,
      reviews.fml_46_55,
      reviews.ml_46_55,
    ],
    '41-45': [
      reviews.fml_35_45,
      reviews.ml_35_45,
      reviews.fml_46_55,
      reviews.ml_46_55,
    ],
    '46-50': [
      reviews.fml_46_55,
      reviews.ml_46_55,
      reviews.fml_55_plus,
      reviews.ml_55_plus,
    ],
    '51-55': [
      reviews.fml_46_55,
      reviews.ml_46_55,
      reviews.fml_55_plus,
      reviews.ml_55_plus,
    ],
    '56-60': [
      reviews.fml_55_plus,
      reviews.ml_55_plus,
      reviews.fml_46_55,
      reviews.ml_46_55,
    ],
    '61-65': [
      reviews.fml_55_plus,
      reviews.ml_55_plus,
      reviews.fml_46_55,
      reviews.ml_46_55,
    ],
    '66-70': [
      reviews.fml_55_plus,
      reviews.ml_55_plus,
      reviews.fml_46_55,
      reviews.ml_46_55,
    ],
    '71+': [
      reviews.fml_55_plus,
      reviews.ml_55_plus,
      reviews.fml_46_55,
      reviews.ml_46_55,
    ],
  };

  return (
    ageRangeMapping[ageRange as string] ?? [
      reviews.fml_16_25,
      reviews.ml_16_25,
      reviews.fml_26_35,
      reviews.ml_26_35,
    ]
  );
};

const reviews: Record<string, ReviewData> = {
  fml_16_25: {
    city: 'New York',
    image: feedbackImages.fml_16_25 as StaticImageData,
    age: 23,
    reviewer: 'Mia',
    review:
      'With college and extracurricular activities, I want to be able to manage my stress levels, so that I can stay productive and motivated. Breeze has helped me with that!',
  },
  ml_16_25: {
    city: 'Dallas',
    image: feedbackImages.ml_16_25 as StaticImageData,
    age: 22,
    reviewer: 'Ethan',
    review:
      "I am still figuring myself out, and I feel like Breeze's tests have helped me a lot!",
  },
  fml_26_35: {
    city: 'Los Angeles',
    image: feedbackImages.fml_26_35 as StaticImageData,
    age: 31,
    reviewer: 'Lauren',
    review:
      'As I deal with daily work stress, Breeze helps me maintain my mental well-being',
  },
  ml_26_35: {
    city: 'New York',
    image: feedbackImages.ml_26_35 as StaticImageData,
    age: 30,
    reviewer: 'David',
    review:
      "Breeze's tests have helped me discover the strengths I never knew about, and I am now tapping into them",
  },
  fml_35_45: {
    city: 'Dallas',
    image: feedbackImages.fml_35_45 as StaticImageData,
    age: 36,
    reviewer: 'Heather',
    review:
      "I am 36 years old, and I used to think I knew myself completely, but Breeze's tests helped me uncover my curious sides, which I am now exploring.",
  },
  ml_35_45: {
    city: 'Los Angeles',
    image: feedbackImages.ml_35_45 as StaticImageData,
    age: 42,
    reviewer: 'Matthew',
    review:
      'Breeze is my compass in mental well-being. Their tests help me get to know myself better, and with daily mood checks, I keep track of my mental state',
  },
  fml_46_55: {
    city: 'Los Angeles',
    image: feedbackImages.fml_46_55 as StaticImageData,
    age: 49,
    reviewer: 'Cynthia',
    review:
      "I've been feeling tired lately, but after taking a Breeze's test, I learned what gives me energy, and have been using their advice ever since",
  },
  ml_46_55: {
    city: 'Los Angeles',
    image: feedbackImages.ml_46_55 as StaticImageData,
    age: 50,
    reviewer: 'Richard',
    review:
      "Lately, I've not been myself — lost and not seeing my purpose clearly anymore. With its tests and courses, Breeze guided me and helped regain my motivation and focus",
  },
  fml_55_plus: {
    city: 'Dallas',
    image: feedbackImages.fml_55_plus as StaticImageData,
    age: 59,
    reviewer: 'Barbara',
    review:
      "At my age, maintaining focus can be challenging. Fortunately, Breeze's courses have offered valuable advice on improving my memory and concentration",
  },
  ml_55_plus: {
    city: 'New York',
    image: feedbackImages.ml_55_plus as StaticImageData,
    age: 58,
    reviewer: 'James',
    review:
      "At my age, maintaining focus can be challenging. Fortunately, Breeze's courses have offered valuable advice on improving my memory and concentration",
  },
};
