'use client';

import { Step } from '@/app/adhd-test/static/data/quiz_data';
import { quizImages } from '@/app/adhd-test/static/data/test_images';
import Question from '@/app/adhd-test/test/components/Question';
import QuizButton from '@/components/QuizButton/QuizButton';
import sanitizeHtml from 'sanitize-html';
import Image from 'next/image';

import { Fade } from '@mui/material';

import styles from '@/app/adhd-test/test/components/SingleChoiceStatementQuestion/SingleChoiceStatementQuestion.module.scss';

export default function SingleChoiceStatementQuestion({
  currentStep,
  nextSlug,
}: {
  currentStep: Step;
  nextSlug: string;
}) {
  return (
    <Fade in unmountOnExit>
      <div className={styles.container}>
        <Question question={currentStep.questionText} />
        <div className={styles.answers}>
          <>
            {currentStep.answers.map((answer) => {
              return (
                <QuizButton
                  key={answer.answerText}
                  href={nextSlug}
                  className={styles.button}
                  startIcon={
                    answer.answerImageId ? (
                      <Image
                        src={quizImages[answer.answerImageId]}
                        width={70}
                        height={70}
                        alt='answer'
                      />
                    ) : null
                  }
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        sanitizeHtml(answer.answerText, {
                          allowedTags: ['br'],
                        }) ?? sanitizeHtml('', { allowedTags: [] }),
                    }}
                  />
                </QuizButton>
              );
            })}
          </>
        </div>
      </div>
    </Fade>
  );
}
