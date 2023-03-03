import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../redux/store';
import { FetchStatus, IPostsState } from '../../types';

const initialState: IPostsState = {
  posts: [],
  status: FetchStatus.IDLE,
  error: undefined
};

let idCounter = 0;

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if (idCounter === 0) {
      idCounter = response.data.length;
    }
    return response.data;
  });

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.posts.push({
        ...action.payload,
        id: idCounter + 1,
        userId: 11
        // Los posts nuevos son publicados como Admin
      });
      idCounter++;
    },
    postEdited(state, action) {
      const { id, title, body } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
      }
    },
    postDeleted(state, action) {
      const id = action.payload;
      state.posts.splice(state.posts.findIndex((post) => post.id === id), 1);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = FetchStatus.LOADING;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = FetchStatus.SUCCEEDED;
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = FetchStatus.FAILED;
        state.error = action.error.message;
      });
  }
});

export const { postAdded, postEdited, postDeleted } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state: RootState) => state.posts.posts;

export const selectStatus = (state: RootState) => state.posts.status;

export const selectError = (state: RootState) => state.posts.error;