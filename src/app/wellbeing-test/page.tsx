import AppBackgroundImage from '@/app/wellbeing-test/components/AppBackgroundImage/AppBackgroundImage';
import { FUNNEL_ROUTES } from '@/app/wellbeing-test/constants';
import main_img from '@/app/wellbeing-test/static/images/intro/intro_main_img.webp';
import PrimaryButton from '@/components/PrimaryButton';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from '@/app/wellbeing-test/page.module.scss';

export default function WellbeingTestPage() {
  return (
    <>
      <AppBackgroundImage screen='intro' />
      <div className={styles.logo} />
      <div className={styles.container}>
        <Image
          priority
          src={main_img as StaticImageData}
          alt={'main-intro-image'}
          width={165}
          height={230}
        />
        <h1 className={styles.title}>
          Discover your mental well-being profile
        </h1>
        <p className={styles.subtitle}>
          Find your unique path to emotional resilience and happiness{' '}
        </p>
        <PrimaryButton href={FUNNEL_ROUTES.GENDER_SELECT}>
          Take Test
        </PrimaryButton>
      </div>
    </>
  );
}
