import styles from './Navbar.module.scss';
import NewPostButton from '../NewPostButton/NewPostButton';
import Logo from '../../assets/images/postmaster.png';

const Navbar = () => {

  return (
    <div className={styles.mainContainer}>
      {/* <div className={styles.logoContainer}> */}
      <img className={styles.logo} src={Logo}/>
      {/* </div> */}
      <NewPostButton/>
    </div>
  );
};

export default Navbar;