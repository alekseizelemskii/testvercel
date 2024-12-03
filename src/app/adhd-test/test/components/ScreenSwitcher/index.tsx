import { ScreenType, Step } from '@/app/adhd-test/static/data/quiz_data';
import EndSectionScreen from '@/app/adhd-test/test/components/EndSectionScreen';
import FeedbackScreen from '@/app/adhd-test/test/components/FeedbackScreen';
import MultipleChoiceQuestion from '@/app/adhd-test/test/components/MultipleChoiceQuestion';
import SingleChoiceQuestion from '@/app/adhd-test/test/components/SingleChoiceQuestion';
import SingleChoiceStatementQuestion from '@/app/adhd-test/test/components/SingleChoiceStatementQuestion';
import TailoredScreen from '@/app/adhd-test/test/components/TailoredScreen';
import React, { ReactElement } from 'react';

interface ScreenSwitcherProps {
  currentStep: Step;
  nextSlug: string;
  screenType: string;
}

const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  currentStep,
  nextSlug,
  screenType,
}): ReactElement => {
  switch (screenType) {
    case ScreenType.SingleChoiceQuestion:
      return (
        <SingleChoiceQuestion currentStep={currentStep} nextSlug={nextSlug} />
      );

    case ScreenType.SingleChoiceStatementQuestion:
      return (
        <SingleChoiceStatementQuestion
          currentStep={currentStep}
          nextSlug={nextSlug}
        />
      );

    case ScreenType.MultipleChoiceQuestion:
      return (
        <MultipleChoiceQuestion currentStep={currentStep} nextSlug={nextSlug} />
      );

    case ScreenType.EndOfSection1:
      return <EndSectionScreen screenType={screenType} nextSlug={nextSlug} />;

    case ScreenType.EndOfSection2:
      return <EndSectionScreen screenType={screenType} nextSlug={nextSlug} />;

    case ScreenType.FeedbackScreen:
      return <FeedbackScreen nextSlug={nextSlug} />;

    case ScreenType.TailoredScreen:
      return <TailoredScreen nextSlug={nextSlug} />;

    default:
      return <div>Something went wrong</div>;
  }
};

export default ScreenSwitcher;
