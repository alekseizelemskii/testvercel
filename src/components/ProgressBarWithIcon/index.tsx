'use client';

import React, { ReactElement } from 'react';

import styles from '@/components/ProgressBarWithIcon/ProgressBarWithIcon.module.scss';

interface ProgressBarWithIcon {
  title: string;
  progress: number;
  mainColor: string;
  secondColor: string;
}
export default function ProgressBarWithIcon(props: ProgressBarWithIcon) {
  const { title, progress, mainColor, secondColor } = props;

  const isProgressFinished = progress === 100;
  const isLoading = progress > 0 && progress !== 100;

  return (
    <div className={styles.progressBox}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>{title}</div>
        <div className={styles.progressDetails}>
          {isProgressFinished && <IconChecked />}
          {isLoading && (
            <span className={styles.progressNumber}>{progress}%</span>
          )}
        </div>
      </div>
      <div
        className={styles.progressBar}
        style={{ backgroundColor: secondColor }}
      >
        <div
          className={styles.progressBarLine}
          style={{
            width: `${progress}%`,
            backgroundColor: mainColor,
          }}
        ></div>
      </div>
    </div>
  );
}

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
