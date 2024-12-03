import { QUIZ_CATEGORIES } from '@/app/wellbeing-test/static/data';
import { Category } from '@/app/wellbeing-test/types';
import clsx from 'clsx';
import React from 'react';

import { Box } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/CategorizedProgressBar/CategorizedProgressBar.module.scss';

interface CategorizedProgressBarProps {
  currentCategory: string;
  numberOfCurrentQuestionInCategory: number;
}
const categories = QUIZ_CATEGORIES;

const CategorizedProgressBar: React.FC<CategorizedProgressBarProps> = ({
  currentCategory,
  numberOfCurrentQuestionInCategory,
}) => {
  const currentCategoryIndex = determineCategoryIndex(
    categories,
    currentCategory
  );
  const sectionWidth = 94.8 / (categories.length - 1);

  return (
    <Box className={styles.progress}>
      {categories.map((category, index) => {
        if (index < currentCategoryIndex) {
          return (
            <Box
              key={index}
              className={clsx(styles.category, styles.categoryCompleted)}
              style={{ width: `${sectionWidth}%` }}
            >
              <Box
                className={clsx(
                  styles.categoryCircle,
                  styles.categoryCircleCurrent
                )}
              ></Box>
            </Box>
          );
        }
        if (index === currentCategoryIndex) {
          return (
            <Box
              key={index}
              className={clsx(styles.category, styles.categoryCurrent)}
              style={{ width: `${sectionWidth}%` }}
            >
              <Box
                className={
                  index === categories.length - 1
                    ? styles.categoryNameLast
                    : styles.categoryName
                }
              >
                {category.category}
              </Box>
              <Box
                className={styles.progressLine}
                style={{
                  width:
                    category.questionsNumber -
                      numberOfCurrentQuestionInCategory >=
                    2
                      ? `${(numberOfCurrentQuestionInCategory * 100) / category.questionsNumber}%`
                      : `${(numberOfCurrentQuestionInCategory * 90) / category.questionsNumber}%`,
                }}
              ></Box>
              <Box
                className={clsx(
                  styles.categoryCircle,
                  styles.categoryCircleCurrent
                )}
              ></Box>
            </Box>
          );
        }
        if (index > currentCategoryIndex) {
          return (
            <Box
              key={index}
              className={clsx(styles.category)}
              style={{ width: `${sectionWidth}%` }}
            >
              <Box
                className={clsx(
                  styles.categoryCircle,
                  styles.categoryCircleNext
                )}
              >
                {index + 1}
              </Box>
            </Box>
          );
        }
      })}
    </Box>
  );
};

const determineCategoryIndex = (
  categories: Category[],
  currentCategoryText: string
): number => {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].category === currentCategoryText) {
      return i;
    }
  }
  return 0;
};

export default CategorizedProgressBar;
