import { LOCAL_STORAGE_KEYS } from '@/app/wellbeing-test/constants';
import img from '@/app/wellbeing-test/static/images/tailored/tailored_main_img.webp';
import PrimaryButton from '@/components/PrimaryButton';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import { useAppDispatch, useAppSelector } from '@/utils/redux/store';
// import { Event } from 'types';
import { incrementIndex } from '@/utils/redux/wellbeingTestSlice';
// import { analytics } from 'utils/analytics';
import React, { useState } from 'react';
import Image from 'next/image';

import { Grow, Slide } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/TailoredScreen/TailoredScreen.module.scss';

import { getPrimaryText } from './helpers';

const TailoredScreen: React.FC<{ screenType: string; number: number }> = ({
  number,
  screenType,
}) => {
  const dispatch = useAppDispatch();
  const { age, gender } = useAppSelector((state) => state.wellbeingTest);
  const text = getPrimaryText(age, gender);
  const [showProgress, setShowProgress] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const btnHandler = (): void => {
    dispatch(incrementIndex());
    // analytics.logEvent(
    //   Event.STEP_TEST_COMPLETED,
    //   {
    //     step_number: number + 1,
    //     answer: screenType,
    //     funnel_type: localStorage.getItem(LOCAL_STORAGE_KEYS.UserGender),
    //   },
    //   true
    // );
  };
  const onCompleteProgress = () => {
    setShowProgress(false);
    setShowButton(true);
  };
  return (
    <>
      <Grow in unmountOnExit>
        <div className={styles.container}>
          <Image className={styles.image} src={img} alt='mental health quiz' />
          <h3 className={styles.text}>{text}</h3>
        </div>
      </Grow>

      {showProgress ? (
        <div className={styles.progressContainer}>
          <p style={{ color: '#768AED' }}>Preparing tailored content</p>
          <ProgressBar interval={50} onComplete={onCompleteProgress} />
        </div>
      ) : null}

      <>
        {showButton ? (
          <Slide direction='left' in>
            <div>
              <PrimaryButton className={styles.btn} onClick={btnHandler}>
                Next
              </PrimaryButton>
            </div>
          </Slide>
        ) : null}
      </>
    </>
  );
};
export default TailoredScreen;
