import { ChangeEvent, useState } from 'react';

import { TEXT } from '../../constants';
import { useAppDispatch } from '../../redux/hooks';
import { searchModified } from '../../slices/filters/filtersSlice';
import styles from './SearchBox.module.scss';
import { useDebounce } from './utils';

const SearchBox = () => {

  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  useDebounce(() => {
    dispatch(searchModified(search));
  }, [search], 300);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <input
      type={TEXT}
      placeholder='Search posts by title'
      onChange={handleInputChange}
      className={styles.input}
    />
  );
};

export default SearchBox;