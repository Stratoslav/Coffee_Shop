import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const likes =
  localStorage.getItem("likesCount") !== null
    ? JSON.parse(localStorage.getItem("likesCount"))
    : 0;
const isRedLike =
  localStorage.getItem("redLike") !== null
    ? JSON.parse(localStorage.getItem("redLike")) 
    : false;

type BlogTypes = {
  likeCount: number,
  redLike: boolean
    }
const initialState: BlogTypes = { likeCount: likes, redLike: isRedLike };

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    handleLikeCount(state, action: PayloadAction<number>) {
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
