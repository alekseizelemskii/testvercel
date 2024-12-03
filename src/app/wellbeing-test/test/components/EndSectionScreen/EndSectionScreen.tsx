import AppBackgroundImage from '@/app/wellbeing-test/components/AppBackgroundImage/AppBackgroundImage';
import BackgroundImage from '@/app/wellbeing-test/components/BackgroundImage/BackgroundImage';
import { end_section_section_images } from '@/app/wellbeing-test/static/data/end_section_section_images';
import BackgroundColor from '@/components/BackgroundColor';
import PrimaryButton from '@/components/PrimaryButton';
import { useAppDispatch } from '@/utils/redux/store';
// import { Event } from 'types';
import { incrementIndex } from '@/utils/redux/wellbeingTestSlice';
// import { analytics } from 'utils/analytics';
import React, { ReactElement } from 'react';
import Image from 'next/image';

import { Fade, Stack, useMediaQuery } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/EndSectionScreen/EndSectionScreen.module.scss';

const EndSectionScreen: React.FC<{ screenType: string; number: number }> = ({
  screenType,
  number,
}) => {
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery('(max-width:500px)');
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
      <AppBackgroundImage screen='without' />

      <BackgroundColor color='none' />
      <BackgroundImage
        image={
          isMobile
            ? end_section_section_images.bg_main_mob.src
            : end_section_section_images.bg_main.src
        }
        position={isMobile ? 'center center' : 'center center'}
        size={'cover'}
        repeat='no-repeat'
      />
      <Fade in unmountOnExit>
        <Stack className={styles.container}>
          <Image
            src={end_section_section_images.end_section_img}
            alt='mental health test'
            className={styles.image}
          />
          {getItem(screenType)}
          <PrimaryButton className={styles.button} onClick={btnHandler}>
            Next
          </PrimaryButton>
        </Stack>
      </Fade>
    </>
  );
};
export default EndSectionScreen;
const getItem = (screenType: string): ReactElement => {
  switch (screenType) {
    case 'End of section type of screen 1':
      return (
        <div>
          <p className={styles.title}>
            There is no manual
            <br /> on how to be you
          </p>
          <p className={styles.description}>
            Fortunately, Breeze considers your unique
            <br /> traits, crafting the most efficient plan to
            <br /> help you feel your best.
          </p>
        </div>
      );
    case 'End of section type of screen 2':
      return (
        <div>
          <p className={styles.title}>
            Why settle for a one-size-fits-all approach?
          </p>
          <p className={styles.description}>
            Breeze celebrates your uniqueness.
            <br /> Thus, we create personalized plans to help
            <br /> you navigate areas where you feel stuck.
          </p>
        </div>
      );
    default: {
      return (
        <div>
          <p className={styles.title}>
            No two people are <br /> the same
          </p>
          <p className={styles.description}>
            Some are innately joyful and easygoing, and others — need to make an
            effort to find calm. Either way, all of us are on a journey to
            figure out who we are and how to become happier. Continue your
            journey!
          </p>
        </div>
      );
    }
  }
};
