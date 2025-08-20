import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsApi } from "../service/PostsApi";

// Async thunk: create post
export const createPost = createAsyncThunk(
  "post/createPost",
  async (postData, { rejectWithValue }) => {
    try {
      const response =  await postsApi(postData);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create post");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  data: null,   // Stores created post response
  error: null,  // Stores error message
};

export const PostCreateSlice = createSlice({
  name: "postCreate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default PostCreateSlice.reducer;
