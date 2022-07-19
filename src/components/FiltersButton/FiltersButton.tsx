import { ReactComponent as FiltersIcon } from '../../assets/icons/filters.svg';
import { useState } from 'react';
import styles from './FiltersButton.module.scss';
import FiltersSidebar from '../FiltersSidebar/FiltersSidebar';

const FiltersButton = () => {

  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  const handleClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className={styles.mainContainer} onClick={handleClick}>
        <FiltersIcon className={styles.icon}/>
      </div>
      <FiltersSidebar isVisible={isSidebarVisible} setIsVisible={setIsSidebarVisible}/>
    </>
  );
};

export default FiltersButton;