import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { blogReducer } from "./slice/sliceBlog";
import { cardShopReducer } from "./slice/sliceCardShop";
import { popUpReducer } from "./slice/slicePopUp";
import { navigationReducer } from "./slice/sliceNavigation";
import { contactReducer } from "./slice/sliceContacts";
import { coffeeApi } from "../api/coffeeApi";
export default configureStore({
  reducer: {
    blogReducer,
    cardShopReducer,
    popUpReducer,
    navigationReducer,
    contactReducer,
    [coffeeApi.reducerPath]: coffeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coffeeApi.middleware),
});
