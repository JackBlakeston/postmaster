import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAllFilters, userFilterAdded, userFilterRemoved } from '../../slices/filters/filtersSlice';
import { selectAllUsers } from '../../slices/users/usersSlice';
import { closeOnOverlayClick, useStopScroll } from '../../utils/utils';
import styles from './FiltersSidebar.module.scss';

interface IFiltersSidebarProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const FiltersSidebar = ({ isVisible, setIsVisible }: IFiltersSidebarProps) => {

  useStopScroll(isVisible);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const filters = useAppSelector(selectAllFilters);

  const [checkedBoxes, setCheckedBoxes] = useState<number[]>(filters.users);

  if (!isVisible) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    closeOnOverlayClick(setIsVisible, event);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const userId = Number(event.target.value);
    const newCheckedBoxes = [...checkedBoxes];
    if (isChecked) {
      dispatch(userFilterAdded(userId));
      newCheckedBoxes.push(userId);
      setCheckedBoxes(newCheckedBoxes);
    } else {
      dispatch(userFilterRemoved(userId));
      newCheckedBoxes.splice(checkedBoxes.findIndex(id => id === userId), 1);
      setCheckedBoxes(newCheckedBoxes);
    }
  };

  const getCheckboxStatus = (userId: number) => {
    return checkedBoxes.includes(userId);
  };

  const userCheckboxList = users.map(user => {
    return (
      <div key={user.userId} className={styles.userCheckboxContainer}>
        <label>{user.username}</label>
        <input type='checkbox'
          checked={getCheckboxStatus(user.userId)}
          value={user.userId}
          onChange={handleCheckboxChange}/>
      </div>
    );
  });

  return (
    <div className={styles.mainContainer} onClick={handleOverlayClick}>
      <div className={styles.sidebarContainer}>
        <h2>Filter by user</h2>
        <div className={styles.userListContainer}>
          {userCheckboxList}
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;