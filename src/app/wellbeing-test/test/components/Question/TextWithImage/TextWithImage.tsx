import { QUIZ_SCREENS } from '@/app/wellbeing-test/static/data';
import { test_questions_images } from '@/app/wellbeing-test/static/data/test_questions_images';
import { useAppSelector } from '@/utils/redux/store';
import sanitizeHtml from 'sanitize-html';
import React from 'react';
import Image from 'next/image';

import { Stack, Typography } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/Question/TextWithImage/TextWithImage.module.scss';

const screens = QUIZ_SCREENS;

const TextWithImage: React.FC = () => {
  const { currentScreenIndex } = useAppSelector((state) => state.wellbeingTest);
  const { question, questionImage, screenType } = screens[currentScreenIndex];
  const textStyle = test_questions_images[questionImage]?.sx ?? {
    width: '80%',
  };
  return (
    <div className={styles.container}>
      <Stack gap='8px'>
        <p
          dangerouslySetInnerHTML={{
            __html:
              sanitizeHtml(question, { allowedTags: ['br', 'span'] }) ??
              sanitizeHtml('', { allowedTags: [] }),
          }}
          className={styles.text}
          style={textStyle}
        />
        <>
          {screenType === 'multiple-choice' ? (
            <p className={styles.additionalText}>Select all that apply</p>
          ) : null}
        </>
      </Stack>
      <>
        {test_questions_images[questionImage] ? (
          <Image
            src={test_questions_images[questionImage].img}
            alt={'mental health quiz'}
            className={styles.image}
          />
        ) : null}
      </>
    </div>
  );
};
export default TextWithImage;
