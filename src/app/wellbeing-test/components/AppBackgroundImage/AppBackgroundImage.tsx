'use client';

import green_circle from '@/app/wellbeing-test/static/images/background/green_circle.svg';
import purple_circle from '@/app/wellbeing-test/static/images/background/purple_circle.svg';
import React, { memo } from 'react';

import { useMediaQuery } from '@mui/material';

import styles from '@/app/wellbeing-test/components/AppBackgroundImage/AppBackgroundImage.module.scss';

interface AppBackgroundImageProps {
  screen: 'intro' | 'gender_age' | 'quiz' | 'without';
}

const greenCircleClassNames: string[] = ['bottom-left', 'top-left'];
const purpleCircleClassNames: string[] = [
  'bottom-right',
  'top-right',
  'top-right-desk',
];

const AppBackgroundImage: React.FC<AppBackgroundImageProps> = memo(
  ({ screen }) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    React.useEffect(() => {
      if (screen === 'without') {
        document.getElementById('green_circle').style.display = 'none';
        document.getElementById('green_purple').style.display = 'none';
      }
    }, [screen]);
    switch (screen) {
      case 'intro': {
        return (
          <>
            <img
              id='green_circle'
              src={green_circle.src}
              alt='mental health questionnaire'
              className={styles[greenCircleClassNames[1]]}
            />
            <img
              id='green_purple'
              src={purple_circle.src}
              alt='mental health questionnaire'
              className={
                isMobile
                  ? styles[purpleCircleClassNames[1]]
                  : styles[purpleCircleClassNames[2]]
              }
            />
          </>
        );
      }
      case 'gender_age': {
        return (
          <>
            <img
              id='green_circle'
              src={green_circle.src}
              alt='mental health questionnaire'
              className={styles[greenCircleClassNames[0]]}
            />
            <img
              id='green_purple'
              src={purple_circle.src}
              alt='mental health questionnaire'
              className={styles[purpleCircleClassNames[1]]}
            />
          </>
        );
      }
      case 'quiz': {
        return (
          <>
            <img
              id='green_circle'
              src={green_circle.src}
              alt='mental health questionnaire'
              className={styles[greenCircleClassNames[0]]}
            />
            <img
              id='green_purple'
              src={purple_circle.src}
              alt='mental health questionnaire'
              className={styles[purpleCircleClassNames[0]]}
            />
          </>
        );
      }
      case 'without': {
        return null;
      }
      default:
        return (
          <>
            <img
              id='green_circle'
              src={green_circle.src}
              alt='mental health questionnaire'
              className={styles[greenCircleClassNames[1]]}
            />
            <img
              id='green_purple'
              src={purple_circle.src}
              alt='mental health questionnaire'
              className={styles[purpleCircleClassNames[0]]}
            />
          </>
        );
    }
  }
);

AppBackgroundImage.displayName = 'AppBackgroundImage';
export default AppBackgroundImage;
