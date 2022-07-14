import { createSlice } from '@reduxjs/toolkit'
import { IPost } from '../../interfaces'

const initialState: IPost[] = [
  { id: 1, title: 'First Post!', body: 'Hello!', userId: 11 },
  { id: 2, title: 'Second Post', body: 'More text', userId: 11 }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export default postsSlice.reducer