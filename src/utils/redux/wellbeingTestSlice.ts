import { AgeRange, GenderEnum, Nullable } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GeneralState = {
  currentScreenIndex: number;
  age: AgeRange | string;
  gender: GenderEnum | string;
  finalAnswer: Nullable<string>;
  happinessScore: number;
  mentalProfileScore: string[];
  paymentPosition: number;
  paypalReady: boolean;
};

const initialState: GeneralState = {
  currentScreenIndex: 0,
  age: '',
  gender: '',
  finalAnswer: null,
  happinessScore: 0,
  mentalProfileScore: [],
  paymentPosition: 0,
  paypalReady: false,
};

const generalSlice = createSlice({
  name: 'wellbeingTest',
  initialState,
  reducers: {
    setGender: (state: GeneralState, action: PayloadAction<GenderEnum>) => {
      state.gender = action.payload;
    },
    setAge: (state: GeneralState, action: PayloadAction<AgeRange>) => {
      state.age = action.payload;
    },
    incrementIndex: (state: GeneralState) => {
      state.currentScreenIndex += 1;
    },
    setHappinessScore: (state: GeneralState, action: PayloadAction<number>) => {
      state.happinessScore += action.payload;
    },
    setMentalProfileScore: (
      state: GeneralState,
      action: PayloadAction<string>
    ) => {
      state.mentalProfileScore.push(action.payload);
    },
    resetFunnel: (state: GeneralState) => {
      state.currentScreenIndex = 0;
      state.happinessScore = 0;
      state.mentalProfileScore = [];
    },
    setPaymentPosition: (
      state: GeneralState,
      action: PayloadAction<number>
    ) => {
      state.paymentPosition = action.payload;
    },
    setPaypalReady: (state: GeneralState, action: PayloadAction<boolean>) => {
      state.paypalReady = action.payload;
    },
  },
});

export const {
  setGender,
  setAge,
  incrementIndex,
  setHappinessScore,
  setMentalProfileScore,
  setPaypalReady,
  resetFunnel,
  setPaymentPosition,
} = generalSlice.actions;

export default generalSlice.reducer;
