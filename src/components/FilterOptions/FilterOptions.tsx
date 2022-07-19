import { CHECKBOX } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAllFilters, userFilterAdded, userFilterRemoved } from '../../slices/filters/filtersSlice';
import { selectAllUsers } from '../../slices/users/usersSlice';
import styles from './FilterOptions.module.scss';

export const FilterOptions = () => {

  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const filters = useAppSelector(selectAllFilters);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const userId = Number(event.target.value);
    if (isChecked) {
      dispatch(userFilterAdded(userId));
    } else {
      dispatch(userFilterRemoved(userId));
    }
  };

  const getCheckboxStatus = (userId: number) => {
    return filters.users.includes(userId);
  };

  const userCheckboxList = users.map(user => {
    return (
      <div key={user.userId} className={styles.userCheckboxContainer}>
        <label>{user.username}</label>
        <input type={CHECKBOX}
          checked={getCheckboxStatus(user.userId)}
          value={user.userId}
          onChange={handleCheckboxChange}/>
      </div>
    );
  });

  return (
    <>
      <h2 className={styles.sectionHeader}>Filter by user</h2>
      <div className={styles.mainContainer}>
        {userCheckboxList}
      </div>
    </>
  );
};

export default FilterOptions;