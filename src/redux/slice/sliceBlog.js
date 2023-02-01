import { createSlice } from "@reduxjs/toolkit";

const likes =
  localStorage.getItem("likesCount") !== null
    ? JSON.parse(localStorage.getItem("likesCount"))
    : 0;
const isRedLike =
  localStorage.getItem("redLike") !== null
    ? JSON.parse(localStorage.getItem("redLike"))
    : false;

const initialState = { likeCount: likes, redLike: isRedLike };

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
      localStorage.setItem("likesCount", JSON.stringify(state.likeCount));
      localStorage.setItem("redLike", JSON.stringify(state.redLike));
    },
  },
});

export const { reducer: blogReducer, actions: blogAction } = blogSlice;
