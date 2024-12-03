'use client';

import clsx from 'clsx';
import React, { ReactElement, useState } from 'react';

import { Button, ButtonTypeMap } from '@mui/material';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';

import styles from '@/app/wellbeing-test/components/QuizButton/QuizButton.module.scss';

const QuizButton = (
  props: DefaultComponentProps<ButtonTypeMap>
): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { children, onClick, ...restProps } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsActive(true);
    onClick && onClick(e);
  };

  return (
    <Button
      className={isActive ? clsx(styles.button, styles.active) : styles.button}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default QuizButton;
