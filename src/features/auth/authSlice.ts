import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LoginData {
  username: string;
  password: string;
}

export const login = createAsyncThunk("auth/login", async (data: LoginData) => {
  const response = await fetch("http://localhost:5001/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
});

interface LoginState {
  entity: {};
  loading: boolean;
  error: string | null;
}

const initialState = {
  entity: {},
  loading: false,
  error: null,
} as LoginState;

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.entity = { ...action.payload };
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      if (payload) state.error = payload as string;
      state.loading = false;
    });
  },
});
