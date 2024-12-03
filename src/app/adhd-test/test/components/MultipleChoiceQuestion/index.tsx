'use client';

import { Step } from '@/app/adhd-test/static/data/quiz_data';
import { quizImages } from '@/app/adhd-test/static/data/test_images';
import Question from '@/app/adhd-test/test/components/Question';
import PrimaryButton from '@/components/PrimaryButton';
import QuizButton from '@/components/QuizButton/QuizButton';
import { useState } from 'react';
import Image from 'next/image';

import { Fade } from '@mui/material';

import styles from '@/app/adhd-test/test/components/MultipleChoiceQuestion/MultipleChoiceQuestion.module.scss';

export default function MultipleChoiceQuestion({
  currentStep,
  nextSlug,
}: {
  currentStep: Step;
  nextSlug: string;
}) {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const toggleAnswer = (answerText: string) => {
    setSelectedAnswers(
      (prev) =>
        prev.includes(answerText)
          ? prev.filter((item) => item !== answerText) // Remove if already selected
          : [...prev, answerText] // Add if not selected
    );
  };

  return (
    <Fade in unmountOnExit>
      <div className={styles.container}>
        <Question question={currentStep.questionText} />
        <p className={styles.text}>Choose as many as you like</p>

        <div className={styles.answers}>
          {currentStep.answers.map((answer) => {
            return (
              <QuizButton
                key={answer.answerText}
                onClick={() => toggleAnswer(answer.answerText)}
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
                endIcon={
                  selectedAnswers.includes(answer.answerText) ? (
                    <CheckboxActive />
                  ) : (
                    <CheckboxInactive />
                  )
                }
                classes={{
                  startIcon: styles.startIcon,
                  endIcon: styles.endIcon,
                }}
                active={selectedAnswers.includes(answer.answerText)}
                className={styles.button}
              >
                <p>{answer.answerText}</p>
              </QuizButton>
            );
          })}
        </div>
        <PrimaryButton
          className={styles.primaryButton}
          href={nextSlug}
          disabled={selectedAnswers.length === 0}
        >
          Next
        </PrimaryButton>
      </div>
    </Fade>
  );
}

const CheckboxActive = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='18'
        height='18'
        rx='6'
        stroke='#F9FAFF'
        strokeWidth='2'
      />
      <path
        d='M6 10.2273L8.29397 12.3475C8.68831 12.7119 9.30011 12.6999 9.67982 12.3202L14 8'
        stroke='#F9FAFF'
        strokeWidth='1.5'
      />
    </svg>
  );
};

const CheckboxInactive = () => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='18'
        height='18'
        rx='6'
        stroke='#CED4F2'
        strokeWidth='2'
      />
    </svg>
  );
};
