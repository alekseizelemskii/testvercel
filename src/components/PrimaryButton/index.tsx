'use client';

import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';

import { Button, ButtonProps } from '@mui/material';

import styles from '@/components/PrimaryButton/PrimaryButton.module.scss';

interface CustomButtonProps extends ButtonProps {
  href?: string;
}

const PrimaryButton: React.FC<CustomButtonProps> = ({
  href,
  children,
  ...props
}) => {
  return href ? (
    <Link href={href} className={clsx(styles.button, props.className)}>
      <Button
        variant='contained'
        color='primary'
        className={clsx(styles.button, props.className)}
        {...props}
      >
        {children}
      </Button>
    </Link>
  ) : (
    <Button
      variant='contained'
      color='primary'
      className={clsx(styles.button, props.className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
