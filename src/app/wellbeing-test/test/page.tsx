'use client';

import AppBackgroundImage from '@/app/wellbeing-test/components/AppBackgroundImage/AppBackgroundImage';
import { QUIZ_SCREENS } from '@/app/wellbeing-test/static/data';
import CategorizedProgressBar from '@/app/wellbeing-test/test/components/CategorizedProgressBar/CategorizedProgressBar';
import ScreenSwitcher from '@/app/wellbeing-test/test/components/ScreenSwitcher/ScreenSwitcher';
import BackgroundColor from '@/components/BackgroundColor';
import { useAppSelector } from '@/utils/redux/store';
import React from 'react';

import styles from '@/app/wellbeing-test/test/page.module.scss';

const screens = QUIZ_SCREENS;
export default function TestPage() {
  const { currentScreenIndex } = useAppSelector((state) => state.wellbeingTest);

  const currentScreen = screens[currentScreenIndex];

  const shouldShowProgressBar =
    currentScreen.category && currentScreen.numberInCategory;

  return (
    <>
      <AppBackgroundImage screen='quiz' />
      <div className={styles.container}>
        {shouldShowProgressBar && (
          <CategorizedProgressBar
            currentCategory={currentScreen.category || ''}
            numberOfCurrentQuestionInCategory={
              currentScreen.numberInCategory || 1
            }
          />
        )}
        <ScreenSwitcher
          screenType={currentScreen.screenType}
          number={currentScreen.number}
        />
      </div>
    </>
  );
}
