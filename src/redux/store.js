import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./slice/sliceBlog";
import { cardShopReducer } from "./slice/sliceCardShop";
import { popUpReducer } from "./slice/slicePopUp";
import { navigationReducer } from "./slice/sliceNavigation";
import { contactReducer } from "./slice/sliceContacts";
export default configureStore({
  reducer: {
    blogReducer,
    cardShopReducer,
    popUpReducer,
    navigationReducer,
    contactReducer,
  },
});
