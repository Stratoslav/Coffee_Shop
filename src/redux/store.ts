import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./slice/sliceBlog";
import { cardShopReducer } from "./slice/sliceCardShop";
import { popUpReducer } from "./slice/slicePopUp";
import { navigationReducer } from "./slice/sliceNavigation";
import { contactReducer } from "./slice/sliceContacts";
import {bookingReducer} from './slice/sliceBooking'
import { coffeeApi, coffeeOrderApi } from "../api/coffeeApi";
export const store = configureStore({
  reducer: {
    blogReducer,
    cardShopReducer,
    popUpReducer,
    navigationReducer,
    contactReducer,
    bookingReducer,
    [coffeeApi.reducerPath]: coffeeApi.reducer,
    [coffeeOrderApi.reducerPath]: coffeeOrderApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(coffeeApi.middleware, coffeeOrderApi.middleware),


});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch