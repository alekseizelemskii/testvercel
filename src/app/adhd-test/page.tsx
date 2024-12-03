import { FUNNEL_ROUTES } from '@/app/adhd-test/constants';
import cloudImg from '@/app/adhd-test/static/images/intro/intro_bg_img_mob.webp';
import mainImg from '@/app/adhd-test/static/images/intro/intro_main_img.webp';
import BackgroundColor from '@/components/BackgroundColor';
import PrimaryButton from '@/components/PrimaryButton';
import Image, { StaticImageData } from 'next/image';

import styles from '@/app/adhd-test/page.module.scss';

export default function AdhdPage() {
  return (
    <>
      <BackgroundColor color={'#f5f6ff'} />
      {/*<Image*/}
      {/*  className={styles.cloudImg}*/}
      {/*  priority*/}
      {/*  src={cloudImg as StaticImageData}*/}
      {/*  alt={'breeze-bg-img'}*/}
      {/*  width={700}*/}
      {/*  height={300}*/}
      {/*/>*/}

      <div className={styles.container}>
        <Image
          className={styles.mainImg}
          priority
          src={mainImg as StaticImageData}
          alt={'breeze-main-img'}
          width={350}
          height={180}
        />
        <h1 className={styles.title}>ADHD Screening Test</h1>
        <p className={styles.subtitle}>
          Uncover your ADHD score and learn how to move forward with confidence
        </p>
        <PrimaryButton href={FUNNEL_ROUTES.GENDER_SELECT}>
          Take Test
        </PrimaryButton>
      </div>
    </>
  );
}
