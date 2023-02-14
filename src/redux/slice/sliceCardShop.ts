import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartArr =
  localStorage.getItem("cartArr") !== null
    ? JSON.parse(localStorage.getItem("cartArr"))
    : [];

export type CardTypes = {
  id: number,
  image: string,
  title: string,
  description: string,
  ingredients?: string[]
    }
type CardShopTypes = {
  count: number,
  card: CardTypes[]
  }
const initialState = { count: 1, card: cartArr };

const cardShopSlice = createSlice({
  name: "cardShop",
  initialState: initialState as CardShopTypes,
  reducers: {
    handleIncrement(state, action: PayloadAction<number>) {
      state.count += 1;
    },
    handleDecrement(state, action:  PayloadAction<number>) {
      if (state.count !== 0) {
        state.count -= 1;
      }
    },
    handleClickCard(state, action: PayloadAction<CardTypes>) {
      state.card.push(action.payload);
      localStorage.setItem("cartArr", JSON.stringify(state.card));
    },
    handleRemoveCard(state, action: PayloadAction<CardTypes['id']>) {
      state.card = state.card.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartArr", JSON.stringify(state.card));
    },
  },
});

export const { reducer: cardShopReducer, actions: CardShopAction } =
  cardShopSlice;
