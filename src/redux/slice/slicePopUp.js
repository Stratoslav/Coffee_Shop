import { createSlice } from "@reduxjs/toolkit";
const current =
  localStorage.getItem("currentCity") !== null
    ? JSON.parse(localStorage.getItem("currentCity"))
    : "Kyiv";
let initialState = {
  modalCity: false,
  modalRestaurant: false,
  city: ["Mykolaiv", "Harkiv", "Summy", "Lviv", "Dnipro", "Kyiv"],
  currentCity: current,
};

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
    ChooseCurrentCity(state, action) {
      state.currentCity = action.payload;
      localStorage.setItem("currentCity", JSON.stringify(state.currentCity));
    },
  },
});

export const { reducer: popUpReducer, actions: popUpAction } = PopUpSlice;
