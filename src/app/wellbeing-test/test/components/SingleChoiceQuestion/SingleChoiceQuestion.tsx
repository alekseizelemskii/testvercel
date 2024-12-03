import QuizButton from '@/app/wellbeing-test/components/QuizButton/QuizButton';
import { QUIZ_SCREENS } from '@/app/wellbeing-test/static/data';
import { test_answers_images } from '@/app/wellbeing-test/static/data/test_answers_images';
import Question from '@/app/wellbeing-test/test/components/Question/Question';
import {
  incrementIndex,
  setHappinessScore,
  setMentalProfileScore,
} from '@/utils/redux//wellbeingTestSlice';
import { useAppDispatch, useAppSelector } from '@/utils/redux/store';
// import { Event } from 'types';
// import { analytics } from 'utils/analytics';
import React, { useCallback, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Box, Button, Grow, Stack } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/SingleChoiceQuestion/SingleChoiceQuestion.module.scss';

const screens = QUIZ_SCREENS;

const SingleChoiceQuestion: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentScreenIndex } = useAppSelector((state) => state.wellbeingTest);

  const { answerDesign, scoreTag, answers, category, number } =
    screens[currentScreenIndex];
  const [showGrowEffect, setShowGrowEffect] = useState<boolean>(true);
  let timer;

  const handleAnswer = useCallback(
    (event: React.MouseEvent<HTMLElement>, answer?: string): void => {
      setShowGrowEffect(false);

      timer = setTimeout(() => {
        if (timer) clearTimeout(timer);

        const element = event.target as HTMLElement;
        let value;

        if (element?.parentNode?.nodeName === 'BUTTON') {
          value = (element.parentNode as HTMLButtonElement).value;
        } else {
          value = (element as HTMLButtonElement).value;
        }

        if (scoreTag === 'mental_profile') {
          dispatch(setMentalProfileScore(value));
        } else {
          dispatch(setHappinessScore(Number(value)));
        }

        console.log(`Question ${number}: score ${value}`);
        if (category === 'Final Question' && answer) {
          console.log(true);
          // localStorage.setItem('final_answer', answer);
        }

        // analytics.logEvent(Event.STEP_TEST_COMPLETED, {
        //   step_number: number + 1,
        // });
        dispatch(incrementIndex());
      }, 400);
    },
    [currentScreenIndex]
  );

  useEffect(() => {
    setShowGrowEffect(true);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentScreenIndex]);

  return (
    <Grow in={showGrowEffect} unmountOnExit={true} timeout={200}>
      <Stack className={styles.container}>
        <Box className={styles.questionWrapper}>
          <Question />
        </Box>

        <>
          {answerDesign === 'with image' ? (
            <Box className={styles.imagesButtons}>
              {answers?.map((item) => (
                <Button
                  value={item.score}
                  onClick={(e) => handleAnswer(e, item.text)}
                  className={styles.imagesButtonsItem}
                  key={item.score}
                >
                  <Image
                    src={
                      item.image
                        ? (test_answers_images[item.image] as StaticImageData)
                        : '#'
                    }
                    alt='mental health quiz'
                    width={250}
                    height={150}
                  />
                </Button>
              ))}
            </Box>
          ) : (
            <Stack className={styles.buttons}>
              {answers?.map((item) => {
                return (
                  <QuizButton
                    value={item.score}
                    onClick={(e) => handleAnswer(e, item.text)}
                    key={item.text}
                  >
                    {item.text}
                  </QuizButton>
                );
              })}
            </Stack>
          )}
        </>
      </Stack>
    </Grow>
  );
};
export default SingleChoiceQuestion;
