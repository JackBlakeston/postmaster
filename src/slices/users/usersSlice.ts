import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { IUser } from '../../types';
import { findUserById } from '../../utils/utils';
import { defaultUsers } from './defaultUsers';

const initialState: IUser[] = defaultUsers;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push({
        ...action.payload,
        userId: state.length + 1
      });
    }
  }
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;

export const selectUserById = (state: RootState, userId: number) => findUserById(userId);