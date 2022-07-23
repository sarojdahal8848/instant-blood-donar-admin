import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, toastify } from "../../utils";

export const getAllBlog = createAsyncThunk("blog/all", async () => {
  const token = getToken();
  const response = await fetch("http://localhost:5001/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
});

interface Data {
  _id: string;
  imageUrl: string;
  title: string;
  image: string;
  description: string;
  isActive: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Entity {
  msg: string;
  error?: string;
  data: Data[];
}

interface LoginState {
  entity: Entity;
  loading: boolean;
  error: string | null;
}

const initialState = {
  entity: {},
  loading: false,
  error: null,
} as LoginState;

export const getAllBlogSlice = createSlice({
  name: "getAllBlog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllBlog.fulfilled, (state, action) => {
      state.entity = { ...action.payload };
      state.loading = false;
      state.error = null;
      toastify(action.payload);
    });
    builder.addCase(getAllBlog.rejected, (state, { payload }) => {
      if (payload) state.error = payload as string;
      state.loading = false;
    });
  },
});
