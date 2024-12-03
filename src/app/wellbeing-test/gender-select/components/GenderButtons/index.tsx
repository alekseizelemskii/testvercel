'use client';

import QuizButton from '@/app/wellbeing-test/components/QuizButton/QuizButton';
import {
  FUNNEL_ROUTES,
  LOCAL_STORAGE_KEYS,
} from '@/app/wellbeing-test/constants';
import { GENDERS } from '@/utils/constants';
import React from 'react';
import { useRouter } from 'next/navigation';

import styles from '@/app/wellbeing-test/gender-select/components/GenderButtons/GenderButtons.module.scss';

const genders = Object.values(GENDERS);

export default function GenderButtons() {
  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const target = event.target as HTMLButtonElement;
    const value = target.value;
    setTimeout(() => {
      if (target) {
        // dispatch(setGender(GenderEnum[value]));
        // analytics.logEvent(Event.STEP_TEST_COMPLETED, {
        //     start_test_info_clicked: isInfoClicked
        // });
        // analytics.logUserProperty('gender', GenderEnum[value]);
        // analytics.logSuperEventProperty('funnel_type', GenderEnum[value]);
        localStorage.setItem(LOCAL_STORAGE_KEYS.UserGender, value);
      }
      router.push(FUNNEL_ROUTES.AGE_SELECT);
    }, 400);
  };
  return (
    <div className={styles.container}>
      {genders.map((item) => {
        return (
          <React.Fragment key={item}>
            <QuizButton onClick={handleClick} value={item} key={item}>
              {item}
            </QuizButton>
          </React.Fragment>
        );
      })}
    </div>
  );
}
