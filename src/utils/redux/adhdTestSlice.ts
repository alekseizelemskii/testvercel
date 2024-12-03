import { COOKIE_KEYS, LOCAL_STORAGE_KEYS } from '@/app/adhd-test/constants';
import { AgeRange, GenderEnum } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export type GeneralState = {
  age: AgeRange | string;
  gender: GenderEnum | string;
  progress: {
    currentProgress: number;
    previousProgress: number;
  };
};

const initialState: GeneralState = {
  age: Cookies.get(COOKIE_KEYS.USER_AGE_RANGE) || '',
  gender: Cookies.get(LOCAL_STORAGE_KEYS.USER_GENDER) || '',
  progress: {
    currentProgress: 0,
    previousProgress: 0,
  },
};

const generalSlice = createSlice({
  name: 'adhdTest',
  initialState,
  reducers: {
    setGender: (state, action: PayloadAction<GenderEnum>) => {
      state.gender = action.payload;
      // localStorage.setItem(LOCAL_STORAGE_KEYS.USER_GENDER, action.payload);
    },
    setAge: (state, action: PayloadAction<AgeRange>) => {
      state.age = action.payload;
      // localStorage.setItem(LOCAL_STORAGE_KEYS.USER_AGE_RANGE, action.payload);
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress.previousProgress = state.progress.currentProgress;
      state.progress.currentProgress = action.payload;
    },
  },
});

export const { setGender, setAge, setProgress } = generalSlice.actions;

export default generalSlice.reducer;
