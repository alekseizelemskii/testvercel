// import { analytics } from 'utils/analytics';

import { dataSelector } from '@/app/wellbeing-test/calculating-results/components/Reviews/helpers';
import { feedbackImages } from '@/app/wellbeing-test/static/data/feedback_images';
import PrimaryButton from '@/components/PrimaryButton';
import { useAppDispatch, useAppSelector } from '@/utils/redux//store';
import { incrementIndex } from '@/utils/redux/wellbeingTestSlice';
// import { Event } from 'types';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { Slide } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/FeedbackScreen/FeedbackScreen.module.scss';

const FeedbackScreen: React.FC<{ screenType: string; number: number }> = ({
  number,
}) => {
  const dispatch = useAppDispatch();
  const { gender, age } = useAppSelector((state) => state.wellbeingTest);
  const data = dataSelector(age, gender === 'Female');
  const btnHandler = (): void => {
    dispatch(incrementIndex());
    // analytics.logEvent(
    //   Event.STEP_TEST_COMPLETED,
    //   {
    //     step_number: number + 1,
    //   },
    //   true
    // );
  };
  return (
    <>
      <Slide in unmountOnExit direction='left'>
        <div className={styles.container}>
          <div className={styles.section1}>
            <p className={styles.title}>
              With Breeze, I discovered the <br />
              path to enhancing my wellbeing
            </p>
            <Image
              className={styles.image}
              src={data.image as StaticImageData}
              alt={data.reviewer}
            />
            <div className={styles.reviewBlock}>
              <div className={styles.reviewBlockHead}>
                <p className={styles.reviewBlockHeadReviewer}>
                  {data.reviewer}
                </p>
                <StarsBlock />
              </div>
              <p className={styles.reviewBlockReview}>{data.review}</p>
            </div>
          </div>
        </div>
      </Slide>
      <div className={styles.section2}>
        <p className={styles.section2Text}>
          {data.reviewer} is among many individuals who have
          <br /> overcome the barriers of childhood trauma
          <br />
          and are now living free from its effects.
        </p>
        <PrimaryButton onClick={btnHandler}>Next</PrimaryButton>
      </div>
    </>
  );
};
export default FeedbackScreen;

export const StarsBlock = ({ full = false }) => {
  const repeatingStars = [1, 2, 3, 4];

  return (
    <div className={styles.ratingBlock}>
      {repeatingStars.map((item) => (
        <img key={item} alt='star_img' src={feedbackImages.full_star.src} />
      ))}
      <img
        alt='star_img'
        src={
          full ? feedbackImages.full_star.src : feedbackImages.unfilled_star.src
        }
      />
      <span>{full ? '5.0' : '4.9'}</span>
    </div>
  );
};
