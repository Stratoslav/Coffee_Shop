import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const current =
  localStorage.getItem("currentCity") !== null
    ? JSON.parse(localStorage.getItem("currentCity"))
    : "Kyiv";

type PopUpTypes = {
  modalCity: boolean,
  modalRestaurant: boolean,
  city: string[],
  currentCity: string
    }

let initialState: PopUpTypes = {
  modalCity: false,
  modalRestaurant: false,
  city: ["Mykolaiv", "Harkiv", "Summy", "Lviv", "Dnipro", "Kyiv"],
  currentCity: current,
};

const PopUpSlice = createSlice({
  name: "PopUp",
  initialState,
  reducers: {
    openToogleModal(state) {
      state.modalCity = !state.modalCity;
      state.modalRestaurant = false;
    },

    popUpRestaurant(state) {
      state.modalRestaurant = !state.modalRestaurant;
      state.modalCity = false;
    },
    ChooseCurrentCity(state, action: PayloadAction<string>) {
      state.currentCity = action.payload;
      localStorage.setItem("currentCity", JSON.stringify(state.currentCity));
    },
  },
});

export const { reducer: popUpReducer, actions: popUpAction } = PopUpSlice;
