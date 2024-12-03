'use client';

import ColorProgressBar from '@/app/wellbeing-test/calculating-results/components/ColorProgressBar/ColorProgressBar';
import ExcellentBlock from '@/app/wellbeing-test/calculating-results/components/ExcellentBlock/ExcellentBlock';
import ReviewsCarousel from '@/app/wellbeing-test/calculating-results/components/Reviews/Reviews';
import ConfirmDialog from '@/components/ConfirmDialog/ConfirmDialog';
import { useEffect, useRef, useState } from 'react';

import styles from '@/app/wellbeing-test/calculating-results/page.module.scss';

const progressBars = [
  {
    title: 'Analyzing your well-being',
    mainColor: '#569AFF',
    secondColor: '#C4D8F6',
  },
  {
    title: 'Studying your most prominent symptoms',
    mainColor: '#A36DE8',
    secondColor: '#E0C8FE',
  },
  {
    title: 'Assessing childhood trauma risk',
    mainColor: '#FAD16A',
    secondColor: '#EEE5CC',
  },
  {
    title: 'Preparing statistics and detailed results',
    mainColor: '#F55C8A',
    secondColor: '#FBDFE7',
  },
  {
    title: 'Developing a tailored healing plan',
    mainColor: '#6E5AE4',
    secondColor: '#DBD6FD',
  },
];

const thresholds = [51, 32, 17, null, null];

const dialogTitles = [
  'Do you find yourself frequently avoiding places, people, or activities that remind you of your past?',
  'Do you often feel a sense of being constantly on edge?',
  'Have you noticed significant changes in your eating habits as a response to stress?',
];

const SPEED_OF_PROGRESS = 40;

export default function CalculatingResultsPage() {
  const [state, setState] = useState({ currentStep: 0, progress: 0 }); // Combined state
  const [showDialog, setShowDialog] = useState(false); // Show dialog
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Reference to progress interval

  // Start progress
  const startProgress = (threshold: number | null) => {
    console.log(
      `Starting progress for step ${state.currentStep} with threshold:`,
      threshold
    );
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setState((prevState) => {
          const nextProgress = Math.min(prevState.progress + 1, 100); // Increment progress

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

      <div className={styles.wrapper}>
        <p className={styles.title}>Calculating your results...</p>
        {progressBars.map((bar, index) => (
          <ColorProgressBar
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
        <ExcellentBlock />
        <ReviewsCarousel autoPlay={true} />
      </div>
    </>
  );
}
