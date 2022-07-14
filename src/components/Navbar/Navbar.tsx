import { useState } from 'react';

import { NEW_POST } from '../../constants';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PostForm from '../PostForm/PostForm';
import styles from './Navbar.module.scss';
import { ReactComponent as NewPostIcon } from '../../assets/icons/newPost.svg';



const Navbar = () => {

  const [isPostModalVisible, setIsPostModalVisible] = useState<boolean>(false);

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      setIsPostModalVisible(false);
    }
  }

  const handleNewPostClick = () => {
    setIsPostModalVisible(true);
  }

  return (
    <>
      <Modal isVisible={isPostModalVisible} handleClose={closeModal}>
        <PostForm/>
      </Modal>
      <div className={styles.mainContainer}>
        <Button
          text={NEW_POST}
          onClick={handleNewPostClick}
        >
          <NewPostIcon className={styles.newPostIcon}/>
        </Button>
      </div>
    </>
  );
};

export default Navbar;