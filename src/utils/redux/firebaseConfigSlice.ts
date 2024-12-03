import { FunnelValue } from '@/utils/constants';
import { funnelAbTestLists } from '@/utils/firebase/abTestList';
import { initializeFirebase } from '@/utils/firebase/config';
import { getValueByType } from '@/utils/firebase/helpers';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAndActivate } from 'firebase/remote-config';

interface RemoteConfigState {
  remoteConfig: Record<string, boolean | string | number>;
  loading: boolean;
  error: string | null;
}

const initialState: RemoteConfigState = {
  remoteConfig: {},
  loading: false,
  error: null,
};

export const fetchRemoteConfigs = createAsyncThunk<
  Record<string, boolean | string | number>,
  FunnelValue,
  { rejectValue: string }
>(
  'remoteConfig/fetchRemoteConfigs',
  async (funnelName, { rejectWithValue }) => {
    try {
      const remoteConfig = initializeFirebase(funnelName);

      await fetchAndActivate(remoteConfig);

      const remoteConfigData = funnelAbTestLists[funnelName].reduce<
        Record<string, boolean | string | number>
      >((acc, { name, type, default: defaultValue }) => {
        const value = getValueByType(remoteConfig, name, type, defaultValue);
        acc[name] = value;
        return acc;
      }, {});

      return remoteConfigData;
    } catch (error) {
      console.error('Error fetching remote configs:', error);
      return rejectWithValue('Failed to fetch remote configs');
    }
  }
);

const remoteConfigSlice = createSlice({
  name: 'remoteConfig',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRemoteConfigs.pending, (state) => {
        state.loading = true; // Set loading state to true
        state.error = null; // Reset any previous errors
      })
      .addCase(
        fetchRemoteConfigs.fulfilled,
        (
          state,
          action: PayloadAction<Record<string, boolean | string | number>>
        ) => {
          state.loading = false; // Reset loading state
          state.remoteConfig = action.payload; // Store the fetched remote config
        }
      )
      .addCase(fetchRemoteConfigs.rejected, (state, action) => {
        state.loading = false; // Reset loading state
        state.error = action.payload || 'Unknown error occurred'; // Store error message
      });
  },
});

export default remoteConfigSlice.reducer;
