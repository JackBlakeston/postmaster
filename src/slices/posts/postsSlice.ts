import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '../../redux/store';
import { FetchStatus, IPost, TError } from '../../types';

interface IPostsSliceState {
  posts: IPost[];
  status: FetchStatus;
  error: TError;
}

const initialState: IPostsSliceState = {
  posts: [],
  status: FetchStatus.IDLE,
  error: undefined
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  });

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.posts.unshift({
        ...action.payload,
        id: state.posts.length > 0 ? state.posts[state.posts.length - 1].id + 1 : 1,
        userId: 1
        // NOTA: como no tenemos un sistema de login, estoy creando los nuevos
        //posts con userId = 1 para que salgan al principio de la app
      });
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