import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 1, card: [] };

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
    },
    handleRemoveCard(state, action) {
      state.card = state.card.filter((item) => item.id !== action.payload);
    },
  },
});

export const { reducer: cardShopReducer, actions: CardShopAction } =
  cardShopSlice;
