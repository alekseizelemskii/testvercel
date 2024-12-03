import FunnelLayout from '@/layouts/FunnelLayout/FunnelLayout';
import { FUNNELS } from '@/utils/constants';
import { ReactNode } from 'react';

export default function ChildhoodTraumaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <FunnelLayout funnelName={FUNNELS.CHILDHOOD_TRAUMA}>
        {children}
      </FunnelLayout>
    </>
  );
}
