import { FUNNEL_ROUTES } from '@/app/adhd-test/constants';
import { graphPageImages } from '@/app/adhd-test/static/data/graph_page_images';
import PrimaryButton from '@/components/PrimaryButton';
import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

import { Fade } from '@mui/material';

import styles from '@/app/adhd-test/graph/page.module.scss';

export default function GraphPage() {
  return (
    <>
      <Fade in unmountOnExit>
        <div className={styles.container}>
          <p className={styles.title}>Breeze Effect</p>
          <div className={styles.subtitle}>
            <div>
              <span style={{ color: '#FA8499', marginRight: '10px' }}>
                &#x2022;
              </span>
              <p>
                Untreated <br /> ADHD
              </p>
            </div>
            <div
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <span style={{ color: '#6EC0FC', marginRight: '10px' }}>
                &#x2022;
              </span>
              <p>
                After ADHD <br /> treatment plan
              </p>
            </div>
          </div>
          <Image
            priority
            width={345}
            height={230}
            src={graphPageImages.graph as StaticImageData}
            alt='graph-page'
          />
          <div className={styles.items}>
            {items.map((item) => {
              return (
                <div key={item.id} className={styles.item}>
                  <Image
                    src={item.icon as StaticImageData}
                    alt='img'
                    height={40}
                    width={40}
                  />
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
      <PrimaryButton
        href={FUNNEL_ROUTES.CALCULATING_RESULT}
        className={styles.button}
      >
        Continue
      </PrimaryButton>
    </>
  );
}
interface Item {
  id: string;
  icon: StaticImageData;
  text: ReactNode;
}
const items: Item[] = [
  {
    id: 'i1',
    icon: graphPageImages.university_1 as StaticImageData,
    text: (
      <p>
        <span>The National Library of Medicine</span> published a study stating
        that approximately{' '}
        <span style={{ textDecoration: 'underline' }}>366.3</span> million
        adults worldwide have symptomatic ADHD
      </p>
    ),
  },
  {
    id: 'i2',
    icon: graphPageImages.university_2 as StaticImageData,
    text: (
      <p>
        <span>Centers for Disease Control and Prevention found</span> that{' '}
        <span style={{ textDecoration: 'underline' }}>60%</span> of children
        with ADHD had at least one additional mental, emotional, or behavioral
        disorder.
      </p>
    ),
  },
];
