import BackgroundColor from '@/components/BackgroundColor';
import FunnelLayout from '@/layouts/FunnelLayout/FunnelLayout';
import { FUNNELS } from '@/utils/constants';
import { ReactNode } from 'react';

import styles from '@/app/adhd-test/layout.module.scss';

export default function AdhdLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <BackgroundColor color='#F9F9F9' />
      <FunnelLayout funnelName={FUNNELS.ADHD}>{children}</FunnelLayout>
    </div>
  );
}
