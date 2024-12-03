import { StarsBlock } from '@/app/adhd-test/test/components/FeedbackScreen';
import { reviewDataSelector } from '@/components/ReviewBlock/helpers';
import { AgeRange } from '@/utils/types';
import React, { memo } from 'react';
import Carousel from 'react-material-ui-carousel';

import { Stack, useMediaQuery } from '@mui/material';

import styles from '@/components/ReviewBlock/ReviewBlock.module.scss';

interface ReviewsBlockProps {
  age: AgeRange | string;
  autoplay?: boolean;
}

const ReviewsBlock: React.FC<ReviewsBlockProps> = memo(
  ({ age, autoplay = true }) => {
    const feedbackData = reviewDataSelector(age);
    const isMobile = useMediaQuery('(max-width:500px)');
    return (
      <div className={styles.wrapper}>
        <Carousel
          autoPlay={autoplay}
          NextIcon={<></>}
          PrevIcon={<></>}
          stopAutoPlayOnHover={false}
          interval={3000}
          duration={650}
          animation='slide'
          height={isMobile ? 190 : 190}
          indicatorIconButtonProps={{
            style: {
              color: '#D3D5ED',
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: '#8C98CC',
            },
          }}
        >
          {feedbackData.map(({ reviewer, review, city, age }) => (
            <Stack key={reviewer} sx={{ padding: '16px' }}>
              <Review
                reviewer={reviewer}
                review={review}
                city={city}
                age={age}
              />
            </Stack>
          ))}
        </Carousel>
      </div>
    );
  }
);

interface ReviewProps {
  reviewer: string;
  review: string;
  city: string;
  age: number;
}

const Review: React.FC<ReviewProps> = ({ reviewer, review, city, age }) => {
  return (
    <div className={styles.review}>
      <StarsBlock full />
      <p className={styles.reviewText}>{review}</p>
      <p className={styles.reviewName}>
        {reviewer}, {age}, {city}
      </p>
    </div>
  );
};

ReviewsBlock.displayName = 'ReviewsBlock';

export default ReviewsBlock;
