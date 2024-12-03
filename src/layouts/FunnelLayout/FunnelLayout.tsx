'use client';

import FirebaseInit from '@/components/FirebaseInit';
import { FunnelValue } from '@/utils/constants';
import { ThemeProvider } from '@/utils/mui/context';
import { store } from '@/utils/redux/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { CssBaseline } from '@mui/material';

import styles from '@/layouts/FunnelLayout/FunnelLayout.module.scss';

interface FunnelLayoutProps {
  children: ReactNode;
  funnelName: FunnelValue;
}
export default function FunnelLayout({
  children,
  funnelName,
}: FunnelLayoutProps) {
  return (
    <>
      <Provider store={store}>
        <FirebaseInit funnelName={funnelName} />
        <div className={styles[funnelName]}>
          <ThemeProvider funnelName={funnelName}>{children}</ThemeProvider>
          <CssBaseline />
        </div>
      </Provider>
    </>
  );
}
