import { closeOnOverlayClick, useStopScroll } from '../../utils/utils';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
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

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={styles.mainContainer} onClick={handleOverlayClick}>
      <div className={styles.sidebarContainer}>
        <div className={styles.closeButtonContainer} onClick={handleCloseClick}>
          <CloseIcon className={styles.closeButton}/>
        </div>
        <FilterOptions/>
        <SortOptions/>
      </div>
    </div>
  );
};

export default FiltersSidebar;