import { closeOnOverlayClick, useStopScroll } from '../../utils/utils';
import FilterOptions from '../FilterOptions/FilterOptions';
import SortOptions from '../SortOptions/SortOptions';
import styles from './FiltersSidebar.module.scss';

interface IFiltersSidebarProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const FiltersSidebar = ({ isVisible, setIsVisible }: IFiltersSidebarProps) => {

  useStopScroll(isVisible);

  if (!isVisible) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    closeOnOverlayClick(setIsVisible, event);
  };

  return (
    <div className={styles.mainContainer} onClick={handleOverlayClick}>
      <div className={styles.sidebarContainer}>
        <FilterOptions/>
        <SortOptions/>
      </div>
    </div>
  );
};

export default FiltersSidebar;