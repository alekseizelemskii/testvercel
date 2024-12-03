import { FUNNELS, FunnelValue } from '@/utils/constants';
import { getRemoteConfigDefaultValues } from '@/utils/firebase/helpers';
import { FirebaseOptions, initializeApp } from '@firebase/app';
import { getRemoteConfig } from '@firebase/remote-config';

const firebaseConfigMap: Record<FunnelValue, Record<string, string>> = {
  [FUNNELS.EMOTIONAL_INTELLIGENCE]: {
    apiKey:
      process.env.NEXT_PUBLIC_FIREBASE_EMOTIONAL_INTELLIGENCE_API_KEY || '',
    authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_EMOTIONAL_INTELLIGENCE_AUTH_DOMAIN || '',
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_EMOTIONAL_INTELLIGENCE_PROJECT_ID || '',
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_EMOTIONAL_INTELLIGENCE_STORAGE_BUCKET ||
      '',
    messagingSenderId:
      process.env
        .NEXT_PUBLIC_FIREBASE_EMOTIONAL_INTELLIGENCE_MESSAGING_SENDER_ID || '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_EMOTIONAL_INTELLIGENCE_APP_ID || '',
    measurementId:
      process.env.NEXT_PUBLIC_FIREBASE_EMOTIONAL_INTELLIGENCE_MEASUREMENT_ID ||
      '',
  },
  [FUNNELS.ADHD]: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_ADHD_API_KEY || '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_ADHD_AUTH_DOMAIN || '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_ADHD_PROJECT_ID || '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_ADHD_STORAGE_BUCKET || '',
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_ADHD_MESSAGING_SENDER_ID || '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_ADHD_APP_ID || '',
    // measurementId: process.env.NEXT_PUBLIC_FIREBASE_ADHD_MEASUREMENT_ID || '',
  },
  [FUNNELS.CHILDHOOD_TRAUMA]: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_API_KEY || '',
    authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_AUTH_DOMAIN || '',
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_PROJECT_ID || '',
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_STORAGE_BUCKET || '',
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_MESSAGING_SENDER_ID ||
      '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_APP_ID || '',
    measurementId:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_MEASUREMENT_ID || '',
  },
  [FUNNELS.WELLBEING_TEST]: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_MENTAL_WELLBEING_API_KEY || '',
    authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_MENTAL_WELLBEING_AUTH_DOMAIN || '',
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_MENTAL_WELLBEING_PROJECT_ID || '',
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_MENTAL_WELLBEING_STORAGE_BUCKET || '',
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MENTAL_WELLBEING_MESSAGING_SENDER_ID ||
      '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_MENTAL_WELLBEING_APP_ID || '',
    measurementId:
      process.env.NEXT_PUBLIC_FIREBASE_MENTAL_WELLBEING_MEASUREMENT_ID || '',
  },
  [FUNNELS.PERSONALITY_TYPE]: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PERSONALITY_TYPE_API_KEY || '',
    authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_PERSONALITY_TYPE_AUTH_DOMAIN || '',
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_PERSONALITY_TYPE_PROJECT_ID || '',
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_PERSONALITY_TYPE_STORAGE_BUCKET || '',
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_PERSONALITY_TYPE_MESSAGING_SENDER_ID ||
      '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_PERSONALITY_TYPE_APP_ID || '',
    measurementId:
      process.env.NEXT_PUBLIC_FIREBASE_PERSONALITY_TYPE_MEASUREMENT_ID || '',
  },
  [FUNNELS.CHILDHOOD_TRAUMA_SHORT]: {
    apiKey:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_SHORT_API_KEY || '',
    authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_SHORT_AUTH_DOMAIN || '',
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_SHORT_PROJECT_ID || '',
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_SHORT_STORAGE_BUCKET ||
      '',
    messagingSenderId:
      process.env
        .NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_SHORT_MESSAGING_SENDER_ID || '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_SHORT_APP_ID || '',
    measurementId:
      process.env.NEXT_PUBLIC_FIREBASE_CHILDHOOD_TRAUMA_SHORT_MEASUREMENT_ID ||
      '',
  },
};

const getFirebaseConfig = (funnelName: FunnelValue) => {
  const config = firebaseConfigMap[funnelName];
  if (!config) {
    throw new Error(
      `No Firebase configuration found for funnel: ${funnelName}`
    );
  }

  return config as FirebaseOptions;
};

export const initializeFirebase = (funnelName: FunnelValue) => {
  const config = getFirebaseConfig(funnelName);
  const app = initializeApp(config);
  const remoteConfig = getRemoteConfig(app);

  remoteConfig.settings = {
    fetchTimeoutMillis: 3600000, // Timeout for fetching configs
    minimumFetchIntervalMillis: 3600000, // Minimum interval between fetches
  };
  remoteConfig.defaultConfig = getRemoteConfigDefaultValues(funnelName);
  // TODO: init analytic
  // const firebaseAnalytics = getAnalytics(app);

  return remoteConfig;
};
