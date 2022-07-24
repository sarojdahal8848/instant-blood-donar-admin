import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, toastify } from "../../utils";

interface BlogCreateData {
  title: string;
  image: File;
  description: string;
  status: boolean;
}

export const createBlog = createAsyncThunk(
  "blog/create",
  async (data: BlogCreateData) => {
    const token = getToken();
    const response = await fetch("http://localhost:5001/blog", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
);

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

interface BlogResponse {
  msg: string;
  error?: string;
  data: Data[];
}

interface LoginState {
  getBlog: BlogResponse;
  blogs: BlogResponse;
  loading: boolean;
  error: string | null;
}

const initialState = {
  getBlog: {},
  blogs: {},
  loading: false,
  error: null,
} as LoginState;

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllBlog.fulfilled, (state, action) => {
      state.blogs = { ...action.payload };
      state.loading = false;
      state.error = null;
      toastify(action.payload);
    });
    builder.addCase(getAllBlog.rejected, (state, { payload }) => {
      if (payload) state.error = payload as string;
      state.loading = false;
      toastify({ msg: "error", error: "Something Went Wrong" });
    });
    builder.addCase(createBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      state.getBlog = { ...action.payload };
      state.loading = false;
      state.error = null;
      toastify(action.payload);
    });
    builder.addCase(createBlog.rejected, (state, { payload }) => {
      if (payload) state.error = payload as string;
      state.loading = false;
      toastify({ msg: "error", error: "Something Went Wrong" });
    });
  },
});
