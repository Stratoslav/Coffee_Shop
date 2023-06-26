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
  totalCountArray: number[],
  order: any[],
  // orders: any[]
}
  type OrderInput = {
  name: string;
  count: number;
};
const initialState = { count: 1, card: cartArr, price: 0 , totalCountArray: [], order: []};

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
    handleRemoveAllCard :(state, action: PayloadAction) => {
      state.card = [];
      state.price = 0
    },
    handleTotalCount(state, action: PayloadAction<Omit<CardShopTypes, 'card' | 'totalCountArray' | 'order'>>) {
    
      state.totalCountArray.push(action.payload.price)
     
      let sum = 0;
      for (let i = 0; i < state.totalCountArray.length; i++) {
        console.log(state.totalCountArray[i])
        sum += state.totalCountArray[i];
      }
      state.price = sum;
    
    },
    getInformationAboutOrder: (state, action: PayloadAction<OrderInput[]>) => {
      const newOrders = action.payload;

      for (let i = 0; i < newOrders.length; i++) {
        const currentOrder = newOrders[i];
        const existingOrderIndex = state.order.findIndex(
          (order) => order.name === currentOrder.name
        );

        if (existingOrderIndex !== -1) {
          const existingOrder = state.order[existingOrderIndex];
          if (existingOrder.count < currentOrder.count) {
            state.order.splice(existingOrderIndex, 1); // Remove previous order
            state.order.push(currentOrder); // Add new order
          }
        } else {
          state.order.push(currentOrder); // Add new order
        }
      }

      // console.log(state.order);
    },
  }
});

export const { reducer: cardShopReducer, actions: CardShopAction } =
  cardShopSlice;
