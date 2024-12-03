'use client';

import QuizButton from '@/app/wellbeing-test/components/QuizButton/QuizButton';
import {
  FUNNEL_ROUTES,
} from '@/app/wellbeing-test/constants';
import { AGE_RANGE } from '@/utils/constants';
import React from 'react';
import { useRouter } from 'next/navigation';

import styles from '@/app/wellbeing-test/age-select/components/AgeButtons/AgeButtons.module.scss';

export default function AgeButtons() {
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;
    // analytics.logEvent(Event.STEP_TEST_COMPLETED, {
    //   step_number: 1
    // });

    console.log(value);

    setTimeout(() => {
      if (target) {
        // dispatch(setAge(AgeRange[value]));
        // localStorage.setItem(LOCAL_STORAGE_KEYS.AgeRange, value);
        // analytics.logUserProperty('age', AgeRange[value]);
        // analytics.logSuperEventProperty('age', AgeRange[value]);
      }
      router.push(FUNNEL_ROUTES.TEST);
    }, 400);
  };
  return (
    <div className={styles.container}>
      {AGE_RANGE.map((item) => {
        return (
          <React.Fragment key={item}>
            <QuizButton onClick={(e) => handleClick(e)} value={item} key={item}>
              {item}
            </QuizButton>
          </React.Fragment>
        );
      })}
    </div>
  );
}
