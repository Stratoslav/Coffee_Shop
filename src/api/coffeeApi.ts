import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coffeeApi = createApi({
  reducerPath: "coffeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.sampleapis.com/coffee/" }),
  endpoints: (build) => ({
    getIcedCoffee: build.query({
      query: () => "iced",
    }),
    getHotCoff: build.query({
      query: () => "hot",
    }),
  }),
});

export const { useGetIcedCoffeeQuery, useGetHotCoffQuery } = coffeeApi;
