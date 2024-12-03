import GenderButtons from '@/app/adhd-test/gender-select/components/GenderButtons';
import main_img from '@/app/wellbeing-test/static/images/gender/gender_image.webp';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { Slide } from '@mui/material';

import styles from '@/app/adhd-test/gender-select/page.module.scss';

export default function GenderPage() {
  return (
    <>
      <Slide in={true} unmountOnExit direction='left'>
        <div className={styles.container}>
          <Image
            priority
            src={main_img as StaticImageData}
            alt={'bg'}
            width={165}
            height={200}
          />
          <h2 className={styles.title}>
            Which gender do you <br /> identify with?
          </h2>
          <GenderButtons />
        </div>
      </Slide>
    </>
  );
}
