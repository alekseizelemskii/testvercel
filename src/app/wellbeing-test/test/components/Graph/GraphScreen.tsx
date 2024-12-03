import { FUNNEL_ROUTES } from '@/app/wellbeing-test/constants';
import { graph_images } from '@/app/wellbeing-test/static/data/graph_images';
import PrimaryButton from '@/components/PrimaryButton';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// import { Event } from 'types';

import { Button, Fade, Stack, Typography } from '@mui/material';

import styles from '@/app/wellbeing-test/test/components/Graph/GraphScreen.module.scss';

// import { analytics } from 'utils/analytics';

const GraphScreen: React.FC = () => {
  const router = useRouter();
  // useEffect(() => {
  //   analytics.logEvent(Event.GRAPH_SCREEN_SHOWN, {});
  //   return () => {
  //     analytics.logEvent(Event.GRAPH_SCREEN_COMPLETED, {});
  //   };
  // }, []);
  return (
    <>
      <Fade in>
        <div className={styles.container}>
          <p className={styles.title}>Breeze Effect</p>
          <div className={styles.subtitleBlock}>
            <div className={styles.aboveImgWrapper}>
              <span style={{ color: '#FA8499' }}>&#x2022;</span>
              <p>Before personal insights</p>
            </div>
            <div className={styles.aboveImgWrapper}>
              <span style={{ color: '#8E85D3' }}>&#x2022;</span>
              <p>After personal insights</p>
            </div>
          </div>
          <Image
            className={styles.graphMain}
            src={graph_images.graph_main}
            alt={'mental health test'}
          />
          <div className={styles.itemBlock}>
            <>
              {items.map((item) => {
                return (
                  <div className={styles.item} key={item.title}>
                    <Image alt='univercity_icon' src={item.icon} />
                    <p>
                      <span>{item.title}</span>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </>
          </div>
          <PrimaryButton
            onClick={() => router.push(FUNNEL_ROUTES.CALCULATING_RESULT)}
            className={styles.button}
          >
            Next
          </PrimaryButton>
        </div>
      </Fade>
    </>
  );
};

export default GraphScreen;

const items = [
  {
    icon: graph_images.graph_university_1,
    title: 'Boston University ',
    text: 'highlights the importance of understanding root causes of one’s emotions for sustaining mental wellness.',
  },
  {
    icon: graph_images.graph_university_2,
    title: 'The National Library of Medicine ',
    text: 'research showed that character development and self-awareness are key to true happiness, unlike wealth or power.',
  },
];
