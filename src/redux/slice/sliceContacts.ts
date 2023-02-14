import { createSlice } from "@reduxjs/toolkit";

const initialState = { contactPopUp: false };

const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {
    openOrCloseModal(state) {
      state.contactPopUp = !state.contactPopUp;
    },
  },
});

export const { reducer: contactReducer, actions: contactActions } =
  contactSlice;
