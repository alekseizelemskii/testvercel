import { feedbackImages } from '@/app/wellbeing-test/static/data/feedback_images';
import { AgeRange, Image } from '@/app/wellbeing-test/types';

interface ReviewData {
  image: Image;
  reviewer: string;
  review: string;
}

export const dataSelector = (
  ageRange: AgeRange | string,
  isFemale: boolean
): ReviewData => {
  switch (ageRange) {
    case '18-21':
    case '22-25':
      return isFemale
        ? {
            image: feedbackImages.fml_16_25,
            reviewer: 'Gloria',
            review:
              '“Relationships with my family no longer bother me, as Breeze showed me the power of resilience.”',
          }
        : {
            image: feedbackImages.ml_16_25,
            reviewer: 'Liam',
            review:
              '“Breeze provided me with a safe space to explore and understand my true self.”',
          };
    case '26-30':
    case '31-35':
      return isFemale
        ? {
            image: feedbackImages.fml_26_35,
            reviewer: 'Emma',
            review:
              '“Thanks to Breeze, at 28, I finally found self-acceptance and built fulfilling relationships!“',
          }
        : {
            image: feedbackImages.ml_26_35,
            reviewer: 'Oliver',
            review:
              '“Breeze showed me a safe way to express my trauma-related anger. Now the emotional balance is an integral part of me!”',
          };
    case '36-40':
    case '41-45':
      return isFemale
        ? {
            image: feedbackImages.fml_35_45,
            reviewer: 'Ava',
            review:
              '“My past doesn’t haunt me anymore, and I finally live at peace with who I truly am.”',
          }
        : {
            image: feedbackImages.ml_35_45,
            reviewer: 'Noah',
            review:
              '“Breeze’s tools helped me manage my childhood nightmares, so now I can actually sleep like a baby.”',
          };
    case '46-50':
    case '51-55':
      return isFemale
        ? {
            image: feedbackImages.fml_46_55,
            reviewer: 'Sophia',
            review:
              '“I spent half of my life trying to accept my past, and Breeze helped me finally let it go.”',
          }
        : {
            image: feedbackImages.ml_46_55,
            reviewer: 'Ethan',
            review:
              '“I never thought I could heal from childhood trauma at this age, but Breeze made it possible!“',
          };
    case '56-60':
    case '61-65':
    case '66-70':
    case '71+':
      return isFemale
        ? {
            image: feedbackImages.fml_55_plus,
            reviewer: 'Olivia',
            review:
              '“Thanks to Breeze, I no longer allow my past to define the relationships with my family!”',
          }
        : {
            image: feedbackImages.ml_55_plus,
            reviewer: 'Benjamin',
            review:
              '“Little did I know, healing childhood trauma leads to enhanced well-being. Thanks, Breeze, for a joyful, renewed life!”',
          };
    default:
      return {
        image: feedbackImages.fml_55_plus,
        reviewer: 'Barbara',
        review:
          '“Thanks, Breeze, for teaching me ADHD management techniques to handle my forgetfulness and stay on top of things.”',
      };
  }
};
