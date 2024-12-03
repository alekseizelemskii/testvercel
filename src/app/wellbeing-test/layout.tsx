import BackgroundColor from '@/components/BackgroundColor';
import FunnelLayout from '@/layouts/FunnelLayout/FunnelLayout';
import { FUNNELS } from '@/utils/constants';
import { ReactNode } from 'react';

export default function WellbeingTestLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <BackgroundColor color='#EFF2FF' />
      <FunnelLayout funnelName={FUNNELS.WELLBEING_TEST}>
        {children}
      </FunnelLayout>
    </>
  );
}
