import { CHECKBOX } from '../../constants';
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

  if (!isVisible) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    closeOnOverlayClick(setIsVisible, event);
  };

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