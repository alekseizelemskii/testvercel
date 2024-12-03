'use client';

import { feedbackImages } from '@/app/adhd-test/static/data/feedback_images';
import {
  FeedbackData,
  feedbackDataSelector,
} from '@/app/adhd-test/test/components/FeedbackScreen/helpers';
import PrimaryButton from '@/components/PrimaryButton';
import { useAppSelector } from '@/utils/redux/store';
import Image, { StaticImageData } from 'next/image';

import { Slide } from '@mui/material';

import styles from '@/app/adhd-test/test/components/FeedbackScreen/FeedbackScreen.module.scss';

interface FeedbackScreenProps {
  nextSlug: string;
}
export default function FeedbackScreen({ nextSlug }: FeedbackScreenProps) {
  const { gender, age } = useAppSelector((state) => state.adhdTest);
  const isFemale = gender === 'Female';

  const feedback = feedbackDataSelector(age, isFemale) as FeedbackData;
  const { image, review, reviewer } = feedback;

  return (
    <>
      <Slide in direction='left'>
        <div className={styles.container}>
          <p className={styles.title}>
            It&#39;s easier to stay <br /> focused with Breeze
          </p>
          <div className={styles.review}>
            <Image
              src={image}
              alt='feedback-img'
              width={350}
              height={250}
              priority
            />
            <div className={styles.reviewContainer}>
              <div className={styles.reviewHeader}>
                <p>{reviewer}</p>
                <StarsBlock full={false} />
              </div>
              <p className={styles.reviewText}>{review}</p>
            </div>
          </div>
        </div>
      </Slide>
      <div className={styles.bottomContainer}>
        <p> {reviewer} is among many living barrier-free from ADHD now</p>
        <PrimaryButton href={nextSlug}>Next</PrimaryButton>{' '}
      </div>
    </>
  );
}

export const StarsBlock = ({ full = false }: { full?: boolean }) => {
  const repeatingStars = [1, 2, 3, 4];
  return (
    <div className={styles.stars}>
      {repeatingStars.map((item) => (
        <Image
          key={item}
          alt='star_img'
          src={feedbackImages.full_star as StaticImageData}
          width={15}
          height={15}
        />
      ))}
      <Image
        alt='star_img'
        src={
          full
            ? (feedbackImages.full_star as StaticImageData)
            : (feedbackImages.unfilled_star as StaticImageData)
        }
        width={15}
        height={15}
      />
      <span>{full ? '5.0' : '4.9'}</span>
    </div>
  );
};
