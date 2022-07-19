import { createSlice } from '@reduxjs/toolkit';
import { EMPTY_STRING } from '../../constants';
import { RootState } from '../../redux/store';

interface IFiltersSliceState {
  search: string;
  users: number[];
}

const initialState: IFiltersSliceState = {
  search: EMPTY_STRING,
  users: []
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    searchModified (state, action) {
      state.search = action.payload;
    },
    userFilterAdded (state, action) {
      state.users.push(action.payload);
    },
    userFilterRemoved (state, action) {
      const id = action.payload;
      state.users.splice(state.users.findIndex(userId => userId === id), 1);
    }
  }
});

export const { searchModified, userFilterAdded, userFilterRemoved } = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectAllFilters = (state: RootState) => state.filters;