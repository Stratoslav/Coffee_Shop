import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { isShowComponent: true };

const navigationSlice = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    handleShowComponent(state, action: PayloadAction<boolean>) {
      state.isShowComponent = action.payload;
    },
  },
});

export const { reducer: navigationReducer, actions: navigationAction } =
  navigationSlice;
