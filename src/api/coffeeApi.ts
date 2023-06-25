import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  // const getData = async() => {
  //   const res = await axios.get('http://localhost:5000/api/coffee');
  //   setArr(res.data);
  // }
export const coffeeApi = createApi({
  reducerPath: "coffeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (build) => ({
    // getIcedCoffee: build.query({
    //   query: () => "iced",
    // }),
    getHotCoff: build.query<any, void>({
      query: () => "coffee",
    }),
  }),
});

export const {useGetHotCoffQuery} = coffeeApi
// export const { /*useGetIcedCoffeeQuery*/ useGetHotCoffQuery } = coffeeApi;
