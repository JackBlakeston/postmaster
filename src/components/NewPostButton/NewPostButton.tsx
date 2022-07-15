import { useState } from 'react';

import { NEW_POST } from '../../constants';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import PostForm from '../PostForm/PostForm';
import { ReactComponent as NewPostIcon } from '../../assets/icons/newPost.svg';
import styles from './NewPostButton.module.scss';

const NewPostButton = () => {

  const [isNewPostModalVisible, setIsNewPostModalVisible] = useState<boolean>(false);

  // TODO try to move this logic into the modal component so we dont reuse it so much
  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      setIsNewPostModalVisible(false);
    }
  }

  const handleNewPostClick = () => {
    setIsNewPostModalVisible(true);
  }

  return (
    <>
      <Modal isVisible={isNewPostModalVisible} handleClose={closeModal}>
        <PostForm setIsModalVisible={setIsNewPostModalVisible}/>
      </Modal>
      <Button
        text={NEW_POST}
        onClick={handleNewPostClick}
      >
        <NewPostIcon className={styles.newPostIcon} />
      </Button>
    </>
  );
};

export default NewPostButton;