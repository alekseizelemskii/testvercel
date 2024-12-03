import { FUNNEL_ROUTES } from '@/app/adhd-test/constants';
import {
  OVERALL_STEPS,
  QUIZ_CATEGORIES,
  QUIZ_STEPS,
  ScreenType,
} from '@/app/adhd-test/static/data/quiz_data';
import ScreenSwitcher from '@/app/adhd-test/test/components/ScreenSwitcher';
import CategorizedProgressBar from '@/components/CategorizedProgressBar/CategorizedProgressBar';

export async function generateStaticParams() {
  return QUIZ_STEPS.map((step) => {
    return { screenId: step.slug };
  });
}

export default async function QuizPage({ params }) {
  const { slug } = params;
  const currentStep = QUIZ_STEPS.find((step) => step.slug === slug);

  const nextStepScreen = QUIZ_STEPS.find(
    (step) => step.number === currentStep.number + 1
  );
  const showProgressBar =
    currentStep.screenType !== ScreenType.TailoredScreen &&
    currentStep.screenType !== ScreenType.FeedbackScreen &&
    currentStep.screenType !== ScreenType.EndOfSection1 &&
    currentStep.screenType !== ScreenType.EndOfSection2;

  const isLastStep = currentStep.number === OVERALL_STEPS;

  const nextSlug = isLastStep
    ? FUNNEL_ROUTES.GRAPH
    : `${FUNNEL_ROUTES.TEST}${nextStepScreen.slug}`;

  return (
    <>
      {showProgressBar && (
        <CategorizedProgressBar
          quizCategories={QUIZ_CATEGORIES}
          currentCategory={currentStep.categoryText}
          numberOfCurrentQuestionInCategory={currentStep.numberInCategory}
        />
      )}

      <ScreenSwitcher
        screenType={currentStep.screenType}
        currentStep={currentStep}
        nextSlug={nextSlug}
      />
    </>
  );
}
