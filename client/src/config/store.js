import { configureStore } from "@reduxjs/toolkit" 
import PostCreateSlice from "../feature/PostsSlice";
import fetchPostsSlice from "../feature/fetchPostsSlice";



export const store = configureStore({

  reducer:{createPost: PostCreateSlice,
    fetchPosts:fetchPostsSlice,
  }
  ,
  

});