import AgeButtons from '@/app/wellbeing-test/age-select/components/AgeButtons';
import AppBackgroundImage from '@/app/wellbeing-test/components/AppBackgroundImage/AppBackgroundImage';
import main_img from '@/app/wellbeing-test/static/images/age/age_main_img.webp';
import BackgroundColor from '@/components/BackgroundColor';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { Slide } from '@mui/material';

import styles from '@/app/wellbeing-test/age-select/page.module.scss';

export default function AgePage() {
  return (
    <>
      <AppBackgroundImage screen='gender_age' />

      <Slide in={true} unmountOnExit direction='left'>
        <div className={styles.container}>
          <Image
            priority
            src={main_img as StaticImageData}
            alt={'bg'}
            width={195}
            height={170}
          />
          <h2 className={styles.title}>Please select your age</h2>
          <AgeButtons />
        </div>
      </Slide>
    </>
  );
}
