import { createSlice } from '@reduxjs/toolkit';
import { EMPTY_STRING } from '../../constants';
import { RootState } from '../../redux/store';
import { IFilters, SortOrder, SortType } from '../../types';

const initialState: IFilters = {
  search: EMPTY_STRING,
  users: [],
  sortType: SortType.TITLE,
  sortOrder: SortOrder.ASCENDING
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
    },
    sortTypeOptionSelected (state, action) {
      state.sortType = action.payload;
    },
    sortOrderOptionSelected (state, action) {
      state.sortOrder = action.payload;
    }
  }
});

export const {
  searchModified,
  userFilterAdded,
  userFilterRemoved,
  sortTypeOptionSelected,
  sortOrderOptionSelected
} = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectAllFilters = (state: RootState) => state.filters;