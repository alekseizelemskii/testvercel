import React, { ReactElement } from 'react';

import { Box } from '@mui/material';

import styles from '@/app/wellbeing-test/calculating-results/components/ColorProgressBar/ColorProgressBar.module.scss';

interface ColorProgressBarProps {
  title: string;
  progress: number;
  mainColor: string;
  secondColor: string;
}

const ColorProgressBar: React.FC<ColorProgressBarProps> = ({
  title,
  progress,
  mainColor,
  secondColor,
}): ReactElement => {
  const isProgressFinished = progress === 100;
  const isStart = progress > 0 || progress === 100;
  const isLoading = progress > 0 && progress !== 100;
  return (
    <Box className={styles.progressBox}>
      <Box className={styles.info}>
        <Box className={isStart ? styles.infoTitleFinished : styles.infoTitle}>
          {title}
        </Box>
        <Box width='28px' height='20px' sx={{ textAlign: 'right' }}>
          {isProgressFinished && <IconChecked />}
          {isLoading && (
            <Box className={styles.progressNumber}>{progress}%</Box>
          )}
        </Box>
      </Box>
      <Box
        className={styles.progressBar}
        style={{ backgroundColor: secondColor }}
      >
        <Box
          className={styles.progressBarLine}
          style={{ width: `${progress}%`, backgroundColor: mainColor }}
        ></Box>
      </Box>
    </Box>
  );
};

const IconChecked: React.FC = (): ReactElement => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
    >
      <rect width='18' height='18' rx='9' fill='#55CC99' />
      <path
        d='M5 9.22727L7.29397 11.3475C7.68831 11.7119 8.30011 11.6999 8.67982 11.3202L13 7'
        stroke='#F9FAFF'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export default ColorProgressBar;
