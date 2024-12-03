'use client';

import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

import { Button, ButtonProps } from '@mui/material';

import styles from '@/components/QuizButton/QuizButton.module.scss';

interface QuizButtonProps extends ButtonProps {
  href?: string;
  active?: boolean;
}
function QuizButton(props: QuizButtonProps): React.ReactNode {
  const {
    href,
    active = false,
    children,
    onClick,
    className,
    ...restProps
  } = props;

  const buttonClass = clsx(className, {
    [styles.active]: active,
  });

  return href ? (
    <Link href={href} style={{ textDecoration: 'none', width: '100%' }}>
      <Button
        className={buttonClass}
        variant='quiz'
        onClick={onClick}
        {...restProps}
      >
        {children}
      </Button>
    </Link>
  ) : (
    <Button
      className={buttonClass}
      variant='quiz'
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Button>
  );
}

export default QuizButton;
