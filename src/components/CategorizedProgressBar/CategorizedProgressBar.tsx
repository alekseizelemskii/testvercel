'use client';

import { themes, useTheme } from '@/utils/mui/context';
import { setProgress } from '@/utils/redux/adhdTestSlice';
import { useAppDispatch, useAppSelector } from '@/utils/redux/store';
import clsx from 'clsx';
import React, { useEffect } from 'react';

import styles from '@/components/CategorizedProgressBar/CategorizedProgressBar.module.scss';

interface Category {
  categoryText: string;
  questionCount: number;
}

interface CategorizedProgressBarProps {
  quizCategories: Category[];
  currentCategory: string;
  numberOfCurrentQuestionInCategory: number;
}

const CategorizedProgressBar: React.FC<CategorizedProgressBarProps> = ({
  quizCategories,
  currentCategory,
  numberOfCurrentQuestionInCategory,
}) => {
  const dispatch = useAppDispatch();
  const { themeName } = useTheme();
  const theme = themes[themeName];

  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;

  const { currentProgress } = useAppSelector(
    (state) => state.adhdTest.progress
  );

  const currentCategoryIndex = determineCategoryIndex(
    quizCategories,
    currentCategory
  );

  const sectionWidth = 95 / (quizCategories.length - 1);

  useEffect(() => {
    let targetWidth =
      (numberOfCurrentQuestionInCategory * 100) /
      (quizCategories[currentCategoryIndex]?.questionCount || 1);

    // Ensure progress doesn't exceed 100% for the last category
    if (currentCategoryIndex === quizCategories.length - 1) {
      targetWidth = 100;
    }

    dispatch(setProgress(targetWidth));
  }, [
    numberOfCurrentQuestionInCategory,
    quizCategories,
    currentCategoryIndex,
    dispatch,
  ]);

  useEffect(() => {
    const isCategoryChange = currentProgress === 100;

    return () => {
      if (isCategoryChange) {
        dispatch(setProgress(0));
      }
    };
  }, [currentProgress, dispatch]);

  return (
    <div
      className={styles.progress}
      style={{
        backgroundColor: secondaryColor,
      }}
    >
      {quizCategories.map((category, index) => {
        const isCompleted = index < currentCategoryIndex;
        const isActive = index === currentCategoryIndex;

        return (
          <div
            style={
              {
                width: `${sectionWidth}%`,
                '--primary-color': primaryColor,
                '--secondary-color': secondaryColor,
              } as React.CSSProperties
            }
            key={index}
            className={`${styles.category} ${
              isCompleted
                ? clsx(styles.categoryCompleted, styles.categoryCircleCompleted)
                : ''
            } ${isActive ? styles.categoryCurrent : ''}`}
          >
            {isActive && (
              <div
                className={styles.progressLine}
                style={{
                  width:
                    currentCategoryIndex === quizCategories.length - 1
                      ? '100%'
                      : `${currentProgress}%`,
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            )}
            <div
              className={`${styles.categoryCircle} ${
                isCompleted
                  ? styles.categoryCircleCompleted
                  : isActive
                    ? styles.categoryCircleCurrent
                    : styles.categoryCircleNext
              }`}
            >
              {!isCompleted && !isActive && index + 1}
            </div>
            {isActive && (
              <div
                className={
                  index === quizCategories.length - 1
                    ? styles.categoryNameLast
                    : styles.categoryName
                }
              >
                {category.categoryText}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const determineCategoryIndex = (
  categories: Category[],
  currentCategoryText: string
): number => {
  return categories.findIndex(
    (category) => category.categoryText === currentCategoryText
  );
};

export default CategorizedProgressBar;
