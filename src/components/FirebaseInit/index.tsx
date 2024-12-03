'use client';

import { FunnelValue } from '@/utils/constants';
import { fetchRemoteConfigs } from '@/utils/redux/firebaseConfigSlice';
import { useAppDispatch } from '@/utils/redux/store';
import { useEffect } from 'react';

export default function FirebaseInit({
  funnelName,
}: {
  funnelName: FunnelValue;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRemoteConfigs(funnelName));
  }, [funnelName, dispatch]);

  return null;
}
