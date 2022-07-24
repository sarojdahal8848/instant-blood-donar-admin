import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { loginSlice } from "../features/auth";
import { blogSlice } from "../features/blog";

export const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    blogReducer: blogSlice.reducer,
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
