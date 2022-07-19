import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import postsReducer from '../slices/posts/postsSlice';
import filtersReducer from '../slices/filters/filtersSlice';
import usersReducer from '../slices/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    filters: filtersReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
