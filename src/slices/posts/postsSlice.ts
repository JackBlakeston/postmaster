import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../../types'

const initialState: IPost[] = [
  { id: 1, title: 'First Post!', body: 'Hello!', userId: 11 },
  { id: 2, title: 'Second Post', body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', userId: 11 },
  { id: 3, title: 'Second Post', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', userId: 11 },
  { id: 4, title: 'Second Post', body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', userId: 11 },
  { id: 5, title: 'Second Post', body: 'More text', userId: 11 },
  { id: 6, title: 'Second Post', body: 'More text', userId: 11 }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.unshift({
        ...action.payload,
        id: state[state.length - 1].id + 1,
        userId: 1 // TODO decide if we should do something better than this
      })
    },
    postEdited(state, action) {
      const {id, title, body} = action.payload;
      const existingPost = state.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.body = body;
        // TODO decide what to do with user ids here
      }
    },
    postDeleted(state, action) {
      const id = action.payload;
      state.splice(state.findIndex((post) => post.id === id), 1);
    }
  }
})

export const { postAdded, postEdited, postDeleted } = postsSlice.actions

export default postsSlice.reducer