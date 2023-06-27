import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { query } from "express";


export const coffeeApi = createApi({
  reducerPath: "coffeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (build) => ({
    getHotCoff: build.query<any, void>({
      query: () => "coffee",
    }),
  }),
});
export const coffeeOrderApi = createApi({
  reducerPath: 'coffeeOrderApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/booking/" }),
  endpoints: (build) => ({
   postOrder:  build.mutation<any, void>({
     query: (order) => ({
       url: "order",
       method: "POST",
       body: order
           })
     })

  })
})
export const { useGetHotCoffQuery } = coffeeApi
export const {usePostOrderMutation} = coffeeOrderApi
// export const { /*useGetIcedCoffeeQuery*/ useGetHotCoffQuery } = coffeeApi;
