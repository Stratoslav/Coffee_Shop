import { createSlice } from "@reduxjs/toolkit";

let initialState = { modalCity: false, modalRestaurant: false };

const PopUpSlice = createSlice({
  name: "PopUp",
  initialState,
  reducers: {
    openToogleModal(state, action) {
      state.modalCity = !state.modalCity;
      state.modalRestaurant = false;
    },

    popUpRestaurant(state, action) {
      state.modalRestaurant = !state.modalRestaurant;
      state.modalCity = false;
    },
  },
});

export const { reducer: popUpReducer, actions: popUpAction } = PopUpSlice;
