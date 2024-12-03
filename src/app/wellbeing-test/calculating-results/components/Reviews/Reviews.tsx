import { StarsBlock } from '@/app/wellbeing-test/test/components/FeedbackScreen/FeedbackScreen';
import { feedbackDataSelector } from '@/app/wellbeing-test/test/components/FeedbackScreen/helpers';
import { useAppSelector } from '@/utils/redux/store';
import React, { memo } from 'react';
import Carousel from 'react-material-ui-carousel';

import { Box, Stack, useMediaQuery } from '@mui/material';

import styles from '@/app/wellbeing-test/calculating-results/components/Reviews/Reviews.module.scss';

interface ReviewsCarouselProps {
  autoPlay?: boolean;
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = memo(({ autoPlay }) => {
  const { age } = useAppSelector((state) => state.wellbeingTest);

  const feedbackData = feedbackDataSelector(age);
  const isMobile = useMediaQuery('(max-width:500px)');
  return (
    <div className={styles.wrapper}>
      <Carousel
        autoPlay={autoPlay}
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
            <Review reviewer={reviewer} review={review} city={city} age={age} />
          </Stack>
        ))}
      </Carousel>
    </div>
  );
});

interface ReviewProps {
  reviewer: string;
  review: string;
  city: string;
  age: number;
}

const Review: React.FC<ReviewProps> = ({ reviewer, review, city, age }) => {
  return (
    <div className={styles.review}>
      <StarsBlock />
      <p className={styles.reviewText}>{review}</p>
      <p className={styles.reviewName}>
        {reviewer}, {age}, {city}
      </p>
    </div>
  );
};

ReviewsCarousel.displayName = 'ReviewsCarousel';

export default ReviewsCarousel;
