'use client';

import { COOKIE_KEYS, FUNNEL_ROUTES } from '@/app/adhd-test/constants';
import { QUIZ_STEPS } from '@/app/adhd-test/static/data/quiz_data';
import QuizButton from '@/components/QuizButton/QuizButton';
import { AGE_RANGE } from '@/utils/constants';
import { setAge } from '@/utils/redux/adhdTestSlice';
import { useAppDispatch } from '@/utils/redux/store';
import { AgeRange } from '@/utils/types';
import Cookies from 'js-cookie';
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
      // localStorage.setItem(LOCAL_STORAGE_KEYS.USER_AGE_RANGE, value);
      dispatch(setAge(AgeRange[value]));
      Cookies.set(COOKIE_KEYS.USER_AGE_RANGE, value);
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

export const getFirstQuizSlug = () => {
  // const gender = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_GENDER) ?? '';
  const gender = (Cookies.get(COOKIE_KEYS.USER_GENDER) as string) || 'male';

  const femaleSlug = QUIZ_STEPS.find(
    (i) => i.number === 1 && i.conditionTag === 'female'
  ).slug;

  const maleSlug = QUIZ_STEPS.find(
    (i) => i.number === 1 && i.conditionTag === 'male'
  ).slug;

  return gender.toLowerCase() === 'female' ? femaleSlug : maleSlug;
};
