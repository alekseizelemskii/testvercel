import EndSectionScreen from '@/app/wellbeing-test/test/components/EndSectionScreen/EndSectionScreen';
import FeedbackScreen from '@/app/wellbeing-test/test/components/FeedbackScreen/FeedbackScreen';
import GraphScreen from '@/app/wellbeing-test/test/components/Graph/GraphScreen';
import MultipleChoiceQuestion from '@/app/wellbeing-test/test/components/MultipleChoiseQuestion/MultipleChoiceQuestion';
import SingleChoiceQuestion from '@/app/wellbeing-test/test/components/SingleChoiceQuestion/SingleChoiceQuestion';
import TailoredScreen from '@/app/wellbeing-test/test/components/TailoredScreen/TailoredScreen';
import React, { ReactElement } from 'react';

interface ScreenSwitcherProps {
  screenType: string;
  number: number;
}

export enum ScreenType {
  SingleChoiceQuestion = 'single-choice',
  MultiChoiceQuestion = 'multiple-choice',
  FeedbackScreen = 'feedback_screen',
  EndOfSection1 = 'end_of_section_type_of_screen_1',
  EndOfSection2 = 'end_of_section_type_of_screen_2',
  TailoredScreen = 'tailored_screen',
  GraphScreen = 'Graph Screen',
}

const ScreenSwitcher: React.FC<ScreenSwitcherProps> = ({
  screenType,
  number,
}): ReactElement => {
  switch (screenType) {
    case ScreenType.SingleChoiceQuestion:
      return <SingleChoiceQuestion />;

    case ScreenType.MultiChoiceQuestion:
      return <MultipleChoiceQuestion />;

    case ScreenType.EndOfSection1:
      return (
        <EndSectionScreen
          number={number}
          screenType='End of section type of screen 1'
        />
      );

    case ScreenType.EndOfSection2:
      return (
        <EndSectionScreen
          number={number}
          screenType='End of section type of screen 2'
        />
      );

    case ScreenType.FeedbackScreen:
      return <FeedbackScreen number={number} screenType={screenType} />;

    case ScreenType.TailoredScreen:
      return <TailoredScreen number={number} screenType={screenType} />;

    case ScreenType.GraphScreen:
      return <GraphScreen />;

    default:
      return <div>Something went wrong</div>;
  }
};

export default ScreenSwitcher;
