import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { loginSlice } from "../features/auth";
import { getAllBlogSlice } from "../features/blog";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    getAllBlog: getAllBlogSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
