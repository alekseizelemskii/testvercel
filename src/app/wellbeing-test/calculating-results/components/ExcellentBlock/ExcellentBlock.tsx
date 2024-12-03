import loading_page_gray_stars from '@/app/wellbeing-test/static/images/loading_result/loading_result_gray_stars.svg';
import React, { memo } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Box, Stack } from '@mui/material';

import styles from '@/app/wellbeing-test/calculating-results/components/ExcellentBlock/ExcellentBlock.module.scss';

const ExcellentBlock: React.FC = memo(() => {
  return (
    <Stack className={styles.container}>
      <Stack className={styles.block}>
        <Box className={styles.title}>Excellent</Box>
        <Image
          className={styles.stars}
          width={97}
          height={17}
          src={loading_page_gray_stars as StaticImageData}
          alt='stars_img'
        />
      </Stack>
      <Box className={styles.text}>
        <span>4.8</span> based on <span>27 000</span> reviews
      </Box>
    </Stack>
  );
});

ExcellentBlock.displayName = 'ExcellentBlock';

export default ExcellentBlock;
