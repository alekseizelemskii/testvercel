import adhdTestReducer from '@/utils/redux/adhdTestSlice';
import firebaseReducer from '@/utils/redux/firebaseConfigSlice';
import wellbeingTestReducer from '@/utils/redux/wellbeingTestSlice';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    wellbeingTest: wellbeingTestReducer,
    adhdTest: adhdTestReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['firebase/initializeApp/fulfilled'], // Ignore serializability checks for this action
        ignoredPaths: ['firebase.app'], // Ignore specific paths in the state
      },
    }),
});

// Define RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
