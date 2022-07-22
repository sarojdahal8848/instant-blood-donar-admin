import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toastify } from "../../utils";

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
  authenticated: boolean;
}

const initialState = {
  entity: {},
  loading: false,
  error: null,
  authenticated: false,
} as LoginState;

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.authenticated = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.entity = { ...action.payload };
      state.loading = false;
      state.error = null;
      if (action.payload.msg === "success") {
        state.authenticated = true;
        localStorage.setItem("user-data", JSON.stringify(action.payload.data));
      }
      toastify(action.payload);
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      if (payload) state.error = payload as string;
      state.loading = false;
      state.authenticated = false;
    });
  },
});
