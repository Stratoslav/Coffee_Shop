import { createSlice } from "@reduxjs/toolkit";

const cartArr =
  localStorage.getItem("cartArr") !== null
    ? JSON.parse(localStorage.getItem("cartArr"))
    : [];

const initialState = { count: 1, card: cartArr };

const cardShopSlice = createSlice({
  name: "cardShop",
  initialState: initialState,
  reducers: {
    handleIncrement(state, action) {
      state.count += 1;
    },
    handleDecrement(state, action) {
      if (state.count !== 0) {
        state.count -= 1;
      }
    },
    handleClickCard(state, action) {
      state.card.push(action.payload);
      localStorage.setItem("cartArr", JSON.stringify(state.card));
    },
    handleRemoveCard(state, action) {
      state.card = state.card.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartArr", JSON.stringify(state.card));
    },
  },
});

export const { reducer: cardShopReducer, actions: CardShopAction } =
  cardShopSlice;
