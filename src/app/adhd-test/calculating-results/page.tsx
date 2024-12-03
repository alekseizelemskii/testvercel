'use client';

import ConfirmDialog from '@/components/ConfirmDialog/ConfirmDialog';
import ProgressBarWithIcon from '@/components/ProgressBarWithIcon';
import ReviewBlock from '@/components/ReviewBlock';
import { useAppSelector } from '@/utils/redux/store';
import { useEffect, useRef, useState } from 'react';

import { Fade } from '@mui/material';

import styles from '@/app/adhd-test/calculating-results/page.module.scss';

export default function CalculatingResultsPage() {
  const { age } = useAppSelector((state) => state.adhdTest);
  const [state, setState] = useState({ currentStep: 0, progress: 0 });
  const [showDialog, setShowDialog] = useState(false); // Show dialog
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startProgress = (threshold: number | null) => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setState((prevState) => {
          const nextProgress = Math.min(prevState.progress + 1, 100);

          if (threshold !== null && nextProgress >= threshold) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            setShowDialog(true);
            return { ...prevState, progress: threshold };
          }

          if (nextProgress >= 100) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            return { currentStep: prevState.currentStep + 1, progress: 0 };
          }

          return { ...prevState, progress: nextProgress };
        });
      }, SPEED_OF_PROGRESS);
    }
  };

  const handleDialogConfirm = () => {
    setShowDialog(false);
    startProgress(null);
  };

  // Manage progress for each step
  useEffect(() => {
    if (state.currentStep < progressBars.length) {
      const threshold = thresholds[state.currentStep];
      startProgress(threshold);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state.currentStep]);
  return (
    <>
      <ConfirmDialog
        question=''
        open={showDialog}
        title={dialogTitles[state.currentStep] || ''}
        handleAnswer={handleDialogConfirm}
      />
      <Fade in unmountOnExit>
        <div className={styles.container}>
          <p className={styles.title}>Calculating your results...</p>
          {progressBars.map((bar, index) => (
            <ProgressBarWithIcon
              key={index}
              title={bar.title}
              progress={
                index < state.currentStep
                  ? 100
                  : index === state.currentStep
                    ? state.progress
                    : 0
              }
              mainColor={bar.mainColor}
              secondColor={bar.secondColor}
            />
          ))}
          <ReviewBlock age={age} />
        </div>
      </Fade>
    </>
  );
}

const dialogTitles = [
  'In the past month, have you experienced strong negative emotions in reaction to minor setbacks?',
  'Have any of your family members been diagnosed with ADHD or any other mental health condition?',
  'Would you describe yourself as highly sensitive to loud noises and bright lights?',
];

const SPEED_OF_PROGRESS = 40;

const progressBars = [
  {
    title: 'Processing your ADHD assessment',
    mainColor: '#6FA8FF',
    secondColor: '#CCE0FF',
  },
  {
    title: 'Examining your behavioral patterns',
    mainColor: '#B983FF',
    secondColor: '#E9D8FF',
  },
  {
    title: 'Evaluating your habits',
    mainColor: '#FBE1A1',
    secondColor: '#FFF4D7',
  },
  {
    title: 'Crafting a tailored list of solutions',
    mainColor: '#EF93AF',
    secondColor: '#FFEAF0',
  },
  {
    title: 'Developing your personalized plan',
    mainColor: '#A698FF',
    secondColor: '#EFEDFF',
  },
];

const thresholds = [51, 32, 17, null, null];
