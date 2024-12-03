import { feedbackImages } from '@/app/adhd-test/static/data/feedback_images';
import { AgeRange } from '@/utils/types';
import { StaticImageData } from 'next/image';

export type FeedbackData = {
  image: StaticImageData;
  reviewer: string;
  review: string;
};

const generateFeedbackData = (
  isFemale: boolean,
  data: Record<
    AgeRange,
    { reviewer: string; review: string; image: keyof typeof feedbackImages }
  >
): Record<AgeRange, FeedbackData> => {
  return Object.fromEntries(
    Object.entries(data).map(([ageRange, feedback]) => [
      ageRange,
      {
        ...feedback,
        image: feedbackImages[feedback.image],
      },
    ])
  ) as Record<AgeRange, FeedbackData>;
};

const femaleFeedbackData = generateFeedbackData(true, {
  '18-21': {
    reviewer: 'Mia',
    review:
      '“With Breeze, I recognized and learned to manage my ADHD symptoms. Now I treat it correctly and live a more fulfilling life.”',
    image: 'fml_16_25',
  },
  '22-25': {
    reviewer: 'Mia',
    review:
      '“With Breeze, I recognized and learned to manage my ADHD symptoms. Now I treat it correctly and live a more fulfilling life.”',
    image: 'fml_16_25',
  },
  '26-30': {
    reviewer: 'Lauren',
    review:
      '“Thanks to Breeze’s tests and tailored courses, I learned to treat my ADHD properly and overcame my impulsive habits.”',
    image: 'fml_26_35',
  },
  '31-35': {
    reviewer: 'Lauren',
    review:
      '“Thanks to Breeze’s tests and tailored courses, I learned to treat my ADHD properly and overcame my impulsive habits.”',
    image: 'fml_26_35',
  },
  '36-40': {
    reviewer: 'Heather',
    review:
      '“I was lucky to find Breeze, which has transformed my ADHD journey. Now I can finally control my mood swings.”',
    image: 'fml_35_45',
  },
  '41-45': {
    reviewer: 'Heather',
    review:
      '“I was lucky to find Breeze, which has transformed my ADHD journey. Now I can finally control my mood swings.”',
    image: 'fml_35_45',
  },
  '46-50': {
    reviewer: 'Cynthia',
    review:
      "“With Breeze, I finally overcame my inability to focus. Now, I'm more productive at work and give my kids the attention they crave.”",
    image: 'fml_46_55',
  },
  '51-55': {
    reviewer: 'Cynthia',
    review:
      "“With Breeze, I finally overcame my inability to focus. Now, I'm more productive at work and give my kids the attention they crave.”",
    image: 'fml_46_55',
  },
  '56-60': {
    reviewer: 'Barbara',
    review:
      '“Thanks, Breeze, for teaching me ADHD management techniques to handle my forgetfulness and stay on top of things.”',
    image: 'fml_55_plus',
  },
  '61-65': {
    reviewer: 'Barbara',
    review:
      '“Thanks, Breeze, for teaching me ADHD management techniques to handle my forgetfulness and stay on top of things.”',
    image: 'fml_55_plus',
  },
  '66-70': {
    reviewer: 'Barbara',
    review:
      '“Thanks, Breeze, for teaching me ADHD management techniques to handle my forgetfulness and stay on top of things.”',
    image: 'fml_55_plus',
  },
  '71+': {
    reviewer: 'Barbara',
    review:
      '“Thanks, Breeze, for teaching me ADHD management techniques to handle my forgetfulness and stay on top of things.”',
    image: 'fml_55_plus',
  },
});

const maleFeedbackData = generateFeedbackData(false, {
  '18-21': {
    reviewer: 'Ethan',
    review:
      '“Breeze introduced me to the right ADHD treatment, so I finally overcame my focus issues!”',
    image: 'ml_16_25',
  },
  '22-25': {
    reviewer: 'Ethan',
    review:
      '“Breeze introduced me to the right ADHD treatment, so I finally overcame my focus issues!”',
    image: 'ml_16_25',
  },
  '26-30': {
    reviewer: 'David',
    review:
      '“The app helped me better understand myself and finally conquer my hyperactivity.”',
    image: 'ml_26_35',
  },
  '31-35': {
    reviewer: 'David',
    review:
      '“The app helped me better understand myself and finally conquer my hyperactivity.”',
    image: 'ml_26_35',
  },
  '36-40': {
    reviewer: 'Matthew',
    review:
      '“Breeze is a great app for anyone with ADHD. It gives me the support I need to stay on track with my healing journey.”',
    image: 'ml_35_45',
  },
  '41-45': {
    reviewer: 'Matthew',
    review:
      '“Breeze is a great app for anyone with ADHD. It gives me the support I need to stay on track with my healing journey.”',
    image: 'ml_35_45',
  },
  '46-50': {
    reviewer: 'Richard',
    review:
      '“My friend recommended me Breeze for my ADHD-related impulsivity. And I can confidently do the same.”',
    image: 'ml_46_55',
  },
  '51-55': {
    reviewer: 'Richard',
    review:
      '“My friend recommended me Breeze for my ADHD-related impulsivity. And I can confidently do the same.”',
    image: 'ml_46_55',
  },
  '56-60': {
    reviewer: 'James',
    review:
      "“Even at my age, I've learned to control my hyperactivity with Breeze's practical strategies.”",
    image: 'ml_55_plus',
  },
  '61-65': {
    reviewer: 'James',
    review:
      "“Even at my age, I've learned to control my hyperactivity with Breeze's practical strategies.”",
    image: 'ml_55_plus',
  },
  '66-70': {
    reviewer: 'James',
    review:
      "“Even at my age, I've learned to control my hyperactivity with Breeze's practical strategies.”",
    image: 'ml_55_plus',
  },
  '71+': {
    reviewer: 'James',
    review:
      "“Even at my age, I've learned to control my hyperactivity with Breeze's practical strategies.”",
    image: 'ml_55_plus',
  },
});

export const feedbackDataSelector = (
  ageRange: AgeRange | string,
  isFemale: boolean
): FeedbackData | NonNullable<unknown> => {
  const fallback: FeedbackData = {
    image: feedbackImages['fml_26_35'] as StaticImageData,
    reviewer: 'Lauren',
    review:
      '“Thanks to Breeze’s tests and tailored courses, I learned to treat my ADHD properly and overcame my impulsive habits.”',
  };

  return isFemale
    ? femaleFeedbackData[ageRange] || fallback
    : maleFeedbackData[ageRange] || fallback;
};
