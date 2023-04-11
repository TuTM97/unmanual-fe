import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { ILayoutState } from './layout.interface';

// Define the initial state using that type
const initialState: ILayoutState = {
  rtlData: false,
  topMenu: false,
  mode: 'lightMode',
  loading: false,
  rtlLoading: false,
  menuLoading: false,
  mainContentLoading: false,
  error: null,
};

export const layoutSlice = createSlice({
  name: 'layout',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeLayoutBegin: (state) => {
      state.loading = true;
    },
    changeLayoutSuccess: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
      state.loading = false;
    },
    changeLayoutErr: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    changeRtlBegin: (state) => {
      state.rtlLoading = true;
    },
    changeRtlSuccess: (state, action: PayloadAction<boolean>) => {
      state.rtlData = action.payload;
      state.rtlLoading = false;
    },
    changeRtlErr: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.rtlLoading = false;
    },

    changeMenuBegin: (state) => {
      state.menuLoading = true;
    },
    changeMenuSuccess: (state, action: PayloadAction<boolean>) => {
      state.topMenu = action.payload;
      state.menuLoading = false;
    },
    changeMenuErr: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.menuLoading = false;
    },
  },
});

export const {
  changeLayoutBegin,
  changeLayoutSuccess,
  changeLayoutErr,

  changeRtlBegin,
  changeRtlSuccess,
  changeRtlErr,

  changeMenuBegin,
  changeMenuSuccess,
  changeMenuErr,
} = layoutSlice.actions;

export default layoutSlice.reducer;
