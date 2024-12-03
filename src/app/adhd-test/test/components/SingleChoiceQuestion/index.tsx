'use client';

import { FUNNEL_ROUTES } from '@/app/adhd-test/constants';
import {
  Answer,
  QUIZ_STEPS,
  Step,
} from '@/app/adhd-test/static/data/quiz_data';
import { quizImages } from '@/app/adhd-test/static/data/test_images';
import Question from '@/app/adhd-test/test/components/Question';
import QuizButton from '@/components/QuizButton/QuizButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Fade } from '@mui/material';

import styles from '@/app/adhd-test/test/components/SingleChoiceQuestion/SingleChoiceQuestion.module.scss';

export default function SingleChoiceQuestion({
  currentStep,
  nextSlug,
}: {
  currentStep: Step;
  nextSlug: string;
}) {
  const router = useRouter();
  const handleClick = (answer: Answer) => {
    if (currentStep.important && currentStep.number === 17) {
      const userAnswer = answer.answerText.toLowerCase();
      const { slug } = QUIZ_STEPS.find((i) => {
        return i.number === 18 && i.conditionTag === userAnswer;
      });
      router.push(`${FUNNEL_ROUTES.TEST}${slug}`);
    } else {
      router.push(nextSlug);
    }
  };

  return (
    <Fade in unmountOnExit>
      <div className={styles.container}>
        <Question question={currentStep.questionText} />
        <div className={styles.answers}>
          {currentStep.answers.map((answer) => {
            return (
              <QuizButton
                onClick={() => handleClick(answer)}
                key={answer.answerText}
                startIcon={
                  answer.answerImageId ? (
                    <Image
                      alt='answer'
                      src={quizImages[answer.answerImageId]}
                      width={40}
                      height={40}
                    />
                  ) : null
                }
                className={answer.answerImageId ? styles.button : null}
                classes={{
                  startIcon: answer.answerImageId ? styles.startIcon : null,
                }}
              >
                {answer.answerText}
              </QuizButton>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
