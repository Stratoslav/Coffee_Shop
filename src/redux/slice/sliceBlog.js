import { createSlice } from "@reduxjs/toolkit";

const initialState = { likeCount: 0, redLike: false };

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    handleLikeCount(state, action) {
      state.likeCount = action.payload += 1;
      state.redLike = true;
    },
  },
});

export const { reducer: blogReducer, actions: blogAction } = blogSlice;
