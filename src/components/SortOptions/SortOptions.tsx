import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAllFilters, sortOrderOptionSelected, sortTypeOptionSelected } from '../../slices/filters/filtersSlice';
import { SortOrder, SortType } from '../../types';
import styles from './SortOptions.module.scss';

const SortOptions = () => {

  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectAllFilters);

  const handleSortTypeOptionClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const sortTypeOption = event.currentTarget.id;
    dispatch(sortTypeOptionSelected(sortTypeOption));
  };

  const sortByUserClassNames = classNames({
    [styles.sortTypeOption]: true,
    [styles.activeOption]: filters.sortType === SortType.USER
  });

  const sortByTitleClassNames = classNames({
    [styles.sortTypeOption]: true,
    [styles.activeOption]: filters.sortType === SortType.TITLE
  });

  const handleSortOrderOptionClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const sortOrderOption = event.currentTarget.id;
    dispatch(sortOrderOptionSelected(sortOrderOption));
  };

  const sortAscendingClassNames = classNames({
    [styles.sortTypeOption]: true,
    [styles.activeOption]: filters.sortOrder === SortOrder.ASCENDING
  });

  const sortDescendingClassNames = classNames({
    [styles.sortTypeOption]: true,
    [styles.activeOption]: filters.sortOrder === SortOrder.DESCENDING
  });

  return (
    <>
      <h2>Sort by</h2>
      <div className={styles.sortOptionsContainer}>
        <span
          id={SortType.TITLE}
          className={sortByTitleClassNames}
          onClick={handleSortTypeOptionClick}
        >
            Title (alphabetical)
        </span>
        <span
          id={SortType.USER}
          className={sortByUserClassNames}
          onClick={handleSortTypeOptionClick}
        >
            User (alphabetical)
        </span>
      </div>
      <h2>Sort order</h2>
      <div className={styles.sortOptionsContainer}>
        <span
          id={SortOrder.ASCENDING}
          className={sortAscendingClassNames}
          onClick={handleSortOrderOptionClick}
        >
            Ascending (A-Z)
        </span>
        <span
          id={SortOrder.DESCENDING}
          className={sortDescendingClassNames}
          onClick={handleSortOrderOptionClick}
        >
            Descending (Z-A)
        </span>
      </div>
    </>
  );
};

export default SortOptions;