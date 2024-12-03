import { QUIZ_SCREENS } from '@/app/wellbeing-test/static/data';
import OptionWithCheckbox from '@/app/wellbeing-test/test/components/OptionWithCheckbox/OptionWithCheckbox';
import Question from '@/app/wellbeing-test/test/components/Question/Question';
import PrimaryButton from '@/components/PrimaryButton';
import { useAppDispatch, useAppSelector } from '@/utils/redux//store';
import {
  incrementIndex,
  setHappinessScore,
  setMentalProfileScore,
} from '@/utils/redux/wellbeingTestSlice';
// import { Event } from 'types';
import React, { useEffect, useState } from 'react';

import { Box, Button, Grow, Stack } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/MultipleChoiseQuestion/MultipleChoiceQuestion.module.scss';

// import { analytics } from 'utils/analytics';

export interface SelectedOptions {
  index?: number;
  score?: number | string;
}
const screens = QUIZ_SCREENS;

const MultipleChoiceQuestion: React.FC = () => {
  const { currentScreenIndex } = useAppSelector((state) => state.wellbeingTest);
  const { scoreTag, answers, number } = screens[currentScreenIndex];
  const dispatch = useAppDispatch();
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [showGrowEffect, setShowGrowEffect] = useState<boolean>(true);

  useEffect(() => {
    setShowGrowEffect(true);
  }, [currentScreenIndex]);

  const handleClickOption = (
    text: string,
    score: number | string,
    index: number
  ): void => {
    setSelectedOptions((prevState) => {
      if (index in prevState) {
        const copy = { ...prevState };
        delete copy[index];
        return copy;
      }
      return { ...prevState, [index]: score };
    });
  };

  const handleClickButton = (): void => {
    setShowGrowEffect(false);

    setTimeout(() => {
      if (scoreTag === 'mental_profile') {
        dispatch(
          setMentalProfileScore(Object.values(selectedOptions).join(''))
        );
        console.log(
          `Question ${number}: score ${Object.values(selectedOptions).join('')}`
        );
      } else {
        const sum = Object.values(selectedOptions).reduce(
          (accumulator, value) => {
            return accumulator + value;
          },
          0
        );
        console.log(`Question ${number}: score ${sum}`);
        dispatch(setHappinessScore(Number(sum)));
      }
      // analytics.logEvent(Event.STEP_TEST_COMPLETED, {
      //   step_number: number + 1,
      // });
      dispatch(incrementIndex());
    }, 400);
  };
  return (
    <>
      <Grow in={showGrowEffect} unmountOnExit>
        <Stack className={styles.container}>
          <Box className={styles.questionWrapper}>
            <Question />
          </Box>
          <Stack className={styles.buttons}>
            {answers?.map((item, index) => {
              return (
                <OptionWithCheckbox
                  key={item.text}
                  onClick={() =>
                    handleClickOption(item.text, item.score, index)
                  }
                >
                  <p>{item.text}</p>
                </OptionWithCheckbox>
              );
            })}
          </Stack>
        </Stack>
      </Grow>
      <Stack className={styles.buttonBox}>
        <PrimaryButton
          disabled={Object.keys(selectedOptions).length === 0}
          onClick={handleClickButton}
        >
          Next
        </PrimaryButton>
      </Stack>
    </>
  );
};
export default MultipleChoiceQuestion;
