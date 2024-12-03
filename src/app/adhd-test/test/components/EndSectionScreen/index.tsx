'use client';

import { LOCAL_STORAGE_KEYS } from '@/app/adhd-test/constants';
import { ScreenType } from '@/app/adhd-test/static/data/quiz_data';
import end_section_desktop_bg from '@/app/adhd-test/static/images/end_section/end_section_screen_desktop.png';
import {
  data,
  getCurrentImage,
  getCurrentSubtitle,
} from '@/app/adhd-test/test/components/EndSectionScreen/helpers';
import BackgroundImage from '@/app/wellbeing-test/components/BackgroundImage/BackgroundImage';
import BackgroundColor from '@/components/BackgroundColor';
import PrimaryButton from '@/components/PrimaryButton';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { Slide } from '@mui/material';

import styles from '@/app/adhd-test/test/components/EndSectionScreen/EndSectionScreen.module.scss';

interface EndSectionScreenProps {
  screenType: ScreenType.EndOfSection1 | ScreenType.EndOfSection2;
  nextSlug: string;
}
export default function EndSectionScreen({
  screenType,
  nextSlug,
}: EndSectionScreenProps) {
  const gender = localStorage.getItem(LOCAL_STORAGE_KEYS.USER_GENDER);
  const isFemale = gender.toLowerCase() === 'female';
  const image = getCurrentImage(screenType, isFemale);
  const subtitle = getCurrentSubtitle(screenType, isFemale);

  return (
    <>
      <BackgroundColor color='none' />
      <BackgroundImage
        image={end_section_desktop_bg}
        position={'center center'}
        size={'cover'}
        repeat='no-repeat'
      />
      <Slide in direction='left'>
        <div className={styles.container}>
          <Image
            width={62}
            height={62}
            src={image as StaticImageData}
            alt='adhd-test-online'
          />
          <p className={styles.title}>{data[screenType].title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Slide>
      <PrimaryButton href={nextSlug} className={styles.button}>
        Next
      </PrimaryButton>
    </>
  );
}
