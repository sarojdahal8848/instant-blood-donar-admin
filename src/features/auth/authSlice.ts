import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LoginData {
  username: string;
  password: string;
}

const login = createAsyncThunk("auth/login", async (data: LoginData) => {
  const response = await fetch("http://localhost:5001/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
});

interface LoginState {
  entities: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  entities: [],
  loading: "idle",
} as LoginState;

const loginSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});
