'use client';

import { FUNNEL_ROUTES, LOCAL_STORAGE_KEYS } from '@/app/adhd-test/constants';
import { getFirstQuizSlug } from '@/app/adhd-test/static/data/quiz_data';
import QuizButton from '@/components/QuizButton/QuizButton';
import { AGE_RANGE } from '@/utils/constants';
import { setAge } from '@/utils/redux/adhdTestSlice';
import { useAppDispatch } from '@/utils/redux/store';
import { AgeRange } from '@/utils/types';
import React from 'react';
import { useRouter } from 'next/navigation';

import styles from '@/app/adhd-test/age-select/components/AgeButtons/AgeButtons.module.scss';

export default function AgeButtons() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;

    if (value) {
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER_AGE_RANGE, value);
      dispatch(setAge(AgeRange[value]));
    }

    setTimeout(() => {
      const slug = getFirstQuizSlug();
      router.push(`${FUNNEL_ROUTES.TEST}${slug}`);
    }, 400);
  };

  return (
    <div className={styles.container}>
      {AGE_RANGE.map((item) => (
        <React.Fragment key={item}>
          <QuizButton onClick={handleClick} value={item}>
            {item}
          </QuizButton>
        </React.Fragment>
      ))}
    </div>
  );
}
