import styles from './Navbar.module.scss';
import NewPostButton from '../NewPostButton/NewPostButton';

const Navbar = () => {

  return (
    <div className={styles.mainContainer}>
      <NewPostButton/>
    </div>
  );
};

export default Navbar;