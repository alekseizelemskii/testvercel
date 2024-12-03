'use client';

import { FUNNEL_ROUTES, LOCAL_STORAGE_KEYS } from '@/app/adhd-test/constants';
import QuizButton from '@/components/QuizButton/QuizButton';
import { GENDERS } from '@/utils/constants';
import { setGender } from '@/utils/redux/adhdTestSlice';
import { useAppDispatch } from '@/utils/redux/store';
import { GenderEnum } from '@/utils/types';
import React from 'react';
import { useRouter } from 'next/navigation';

import styles from '@/app/adhd-test/gender-select/components/GenderButtons/GenderButtons.module.scss';

const genders = Object.values(GENDERS);

export default function GenderButtons() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const target = event.target as HTMLButtonElement;
    const value = target.value;
    setTimeout(() => {
      if (value) {
        // dispatch(setGender(GenderEnum[value]));
        // analytics.logEvent(Event.STEP_TEST_COMPLETED, {
        //     start_test_info_clicked: isInfoClicked
        // });
        // analytics.logUserProperty('gender', GenderEnum[value]);
        // analytics.logSuperEventProperty('funnel_type', GenderEnum[value]);
        dispatch(setGender(GenderEnum[value]));
        localStorage.setItem(LOCAL_STORAGE_KEYS.USER_GENDER, value);
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
