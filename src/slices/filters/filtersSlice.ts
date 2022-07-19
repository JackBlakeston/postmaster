import { createSlice } from '@reduxjs/toolkit';
import { EMPTY_STRING } from '../../constants';
import { RootState } from '../../redux/store';

interface IFiltersSliceState {
  search: string;
}

const initialState: IFiltersSliceState = {
  search: EMPTY_STRING
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    searchModified(state, action) {
      state.search = action.payload;
    }
  }
});

export const { searchModified } = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectAllFilters = (state: RootState) => state.filters;