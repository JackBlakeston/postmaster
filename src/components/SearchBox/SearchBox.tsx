import { ChangeEvent } from 'react';

import {  TEXT } from '../../constants';
import { useAppDispatch } from '../../redux/hooks';
import { searchModified } from '../../slices/filters/filtersSlice';

const SearchBox = () => {

  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchModified(event.target.value));
  };

  return (
    <input type={TEXT} placeholder='Search posts by title' onChange={handleInputChange}/>
  );
};

export default SearchBox;