import styles from './Navbar.module.scss';
import NewPostButton from '../NewPostButton/NewPostButton';
import Logo from '../../assets/images/postmaster.png';
import { LOGO } from '../../constants';

const Navbar = () => {

  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src={Logo} alt={LOGO}/>
      <NewPostButton/>
    </div>
  );
};

export default Navbar;