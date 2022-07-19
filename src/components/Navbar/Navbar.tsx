import styles from './Navbar.module.scss';
import NewPostButton from '../NewPostButton/NewPostButton';
import Logo from '../../assets/images/postmaster.png';
import { LOGO } from '../../constants';
import SearchBox from '../SearchBox/SearchBox';
import FiltersButton from '../FiltersButton/FiltersButton';

const Navbar = () => {

  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src={Logo} alt={LOGO}/>
      <div className={styles.filtersContainer}>
        <SearchBox/>
        <FiltersButton/>
      </div>
      <NewPostButton/>
    </div>
  );
};

export default Navbar;