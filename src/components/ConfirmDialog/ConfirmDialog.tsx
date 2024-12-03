import React from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import styles from '@/components/ConfirmDialog/ConfirmDialog.module.scss';

interface ConfirmDialogProps extends DialogProps {
  title: string;
  question: string;
  sameButtons?: boolean;
  handleAnswer: (answer: string) => void;
}

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    padding: '28px 20px',
    borderRadius: '16px',
    margin: '16px',
    maxWidth: '470px',
    '@media (min-width: 500px)': {
      padding: '40px 24px',
    },
  },
}));

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  question,
  sameButtons = false,
  handleAnswer,
  ...rest
}) => {
  return (
    <div>
      <BootstrapDialog {...rest}>
        <p className={styles.title}>{title}</p>
        <DialogContent>
          <p className={styles.question}>{question}</p>
        </DialogContent>
        <div className={styles.buttons}>
          <Button
            value='yes'
            onClick={(e) => {
              const target = e.target as HTMLButtonElement;
              const value = target.value as string;
              handleAnswer(value);
            }}
          >
            Yes
          </Button>
          <Button
            value='no'
            onClick={(e) => {
              const target = e.target as HTMLButtonElement;
              const value = target.value as string;
              handleAnswer(value);
            }}
            className={sameButtons ? '' : styles.focusButton}
          >
            No
          </Button>
        </div>
      </BootstrapDialog>
    </div>
  );
};
export default ConfirmDialog;
