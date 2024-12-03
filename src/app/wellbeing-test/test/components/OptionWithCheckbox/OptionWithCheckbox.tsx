import QuizButton from '@/app/wellbeing-test/components/QuizButton/QuizButton';
import clsx from 'clsx';
import React, { ReactElement, ReactNode, useState } from 'react';

import { Checkbox } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/OptionWithCheckbox/OptionWithCheckbox.module.scss';

interface OptionWithCheckboxProps {
  onClick: () => void;
  children: ReactNode;
}

const OptionWithCheckbox: React.FC<OptionWithCheckboxProps> = ({
  onClick,
  children,
}): ReactElement => {
  const [isActive, setActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    if (!isActive) {
      target.classList.add('active');
    } else {
      target.classList.remove('active');
    }
    onClick();
    setActive(!isActive);
  };

  return (
    <QuizButton
      className={isActive ? clsx(styles.button, styles.active) : styles.button}
      onClick={handleClick}
    >
      {children}
      <Checkbox
        checkedIcon={<CheckedIcon />}
        icon={<UncheckedIcon />}
        checked={isActive}
      />
    </QuizButton>
  );
};

export default OptionWithCheckbox;

const CheckedIcon: React.FC = (): ReactElement => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='18'
        height='18'
        rx='6'
        stroke='#F9FAFF'
        strokeWidth='2'
      />
      <path
        d='M6 10.2273L8.29397 12.3475C8.68831 12.7119 9.30011 12.6999 9.67982 12.3202L14 8'
        stroke='#F9FAFF'
        strokeWidth='1.5'
      />
    </svg>
  );
};
const UncheckedIcon: React.FC = (): ReactElement => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1'
        y='1'
        width='18'
        height='18'
        rx='6'
        stroke='#CED4F2'
        strokeWidth='2'
      />
    </svg>
  );
};
