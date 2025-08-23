import { configureStore } from "@reduxjs/toolkit";
import PostCreateSlice from "../feature/PostsSlice";
import fetchPostsSlice from "../feature/fetchPostsSlice";
import userAuthSlice from "../feature/userAuthSlice";



export const store = configureStore({

  reducer: {
    createPost: PostCreateSlice,
    fetchPosts: fetchPostsSlice,
    userAuth: userAuthSlice,
  }
  ,
  

});