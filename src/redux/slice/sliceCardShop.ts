import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartArr =
  localStorage.getItem("cartArr") !== null
    ? JSON.parse(localStorage.getItem("cartArr"))
    : [];

export type CardTypes = {
  id: number,
  image: string | null,
  coffee_name: string,
  description: string,
  price: number,
  count?: number | null | undefined
  ingredients?: string[] | string,

    }
type CardShopTypes = {
  count: number,
  card: CardTypes[],
  price: number,
  totalCountArray: number[]
  }
const initialState = { count: 1, card: cartArr, price: 0 , totalCountArray: []};

const cardShopSlice = createSlice({
  name: "cardShop",
  initialState: initialState as CardShopTypes,
  reducers: {
    handleIncrement(state, action: PayloadAction<number>) {
      state.count += 1;
    },
    handleDecrement(state, action: PayloadAction<number>) {
      if (state.count !== 0) {
        state.count -= 1;
      }
    },
    handleClickCard(state, action: PayloadAction<CardTypes>) {
      state.card.push(action.payload);
    
      //   if (state.card.length > 17) {
      //   state.card.pop()
      // }
      localStorage.setItem("cartArr", JSON.stringify(state.card));
    },
    handleRemoveCard(state, action: PayloadAction<CardTypes['id']>) {
      state.card = state.card.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartArr", JSON.stringify(state.card));
    },
    handleTotalCount(state, action: PayloadAction<Omit<CardShopTypes, 'card' | 'totalCountArray'>>) {
    
 state.totalCountArray.push(action.payload.price)
     
 let sum = 0;
      for (let i = 0; i < state.totalCountArray.length; i++) {
        sum += state.totalCountArray[i];
      }
      state.price = sum;
    
    }
  },
});

export const { reducer: cardShopReducer, actions: CardShopAction } =
  cardShopSlice;
