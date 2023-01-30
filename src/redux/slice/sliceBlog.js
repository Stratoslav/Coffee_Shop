import { createSlice } from "@reduxjs/toolkit";

const initialState = { likeCount: 0, redLike: false };

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    handleLikeCount(state, action) {
      state.redLike = !state.redLike;
      if (state.redLike) {
        state.likeCount = action.payload += 1;
      } else {
        state.likeCount -= 1;
      }
    },
  },
});

export const { reducer: blogReducer, actions: blogAction } = blogSlice;
