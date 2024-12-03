'use client';

import { tailoredContentImages } from '@/app/adhd-test/static/data/tailored_content_images';
import { ageStatementSelector } from '@/app/adhd-test/test/components/TailoredScreen/helpers';
import PrimaryButton from '@/components/PrimaryButton';
import { useAppSelector } from '@/utils/redux/store';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Slide } from '@mui/material';

import styles from '@/app/adhd-test/test/components/TailoredScreen/TailoredScreen.module.scss';

interface TailoredScreenProps {
  nextSlug: string;
}
export default function TailoredScreen({ nextSlug }: TailoredScreenProps) {
  const { gender, age } = useAppSelector((state) => state.adhdTest);
  const ageStatement = ageStatementSelector(age);
  const isFemale = gender === 'Female';
  const mainImg = isFemale
    ? tailoredContentImages.tailored_screen_img_female
    : tailoredContentImages.tailored_screen_img_male;

  const [showProgress, setShowProgress] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showProgress) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, 45);
    }

    const hideProgressTimer = setTimeout(() => {
      setShowProgress(false);
    }, 4500);

    return () => {
      clearInterval(timer);
      clearTimeout(hideProgressTimer);
    };
  }, [showProgress]);

  return (
    <>
      <Slide in direction='left'>
        <div className={styles.container}>
          <Image
            src={mainImg as StaticImageData}
            alt='do i have adhd'
            width={280}
            height={215}
          />
          <p className={styles.title}>
            {isFemale
              ? "At Breeze, we get that women's ADHD journey is unique"
              : `Breeze has helped 106,455 people ${ageStatement} enhance their concentration`}
          </p>
          {isFemale && (
            <p className={styles.subtitle}>
              Our tailored treatment plans have helped
              <span> 60k+ </span>
              women {ageStatement} manage their ADHD symptoms
            </p>
          )}
        </div>
      </Slide>
      <>
        {showProgress ? (
          <div className={styles.bottomContainer}>
            <p className={styles.progressText}>Preparing tailored content</p>
            <p className={styles.progressPercentage}>{`${progress}%`}</p>
            <div className={styles.progressBar}>
              <div
                className={styles.filler}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <Slide in direction='left'>
            <div className={styles.bottomContainer}>
              <PrimaryButton href={nextSlug}>Next</PrimaryButton>
            </div>
          </Slide>
        )}
      </>
    </>
  );
}
