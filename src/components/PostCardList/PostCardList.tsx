import { useState } from 'react';
import { useSelector } from 'react-redux'

import styles from './PostCardList.module.scss';
import PostCard from '../PostCard/PostCard';
import Modal from '../Modal/Modal';
import { RootState } from '../../app/store';

const PostCardList = () => {

  const posts = useSelector((state: RootState) => state.posts);
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<number>(0);

  const handleEditPostClick = (postId: number) => {
    setIsEditModalVisible(true);
    setSelectedPost(postId)
  }

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      setIsEditModalVisible(false);
    }
  }

  return (
    <>
      <Modal isVisible={isEditModalVisible} handleClose={closeModal}>
        <h1>POST NO {selectedPost}</h1>
      </Modal>
      <div className={styles.mainContainer}>
        {/* isFetching ?
          <p>Content is loading</p>
          : */
          posts.map(post => <PostCard handleEditPostClick={handleEditPostClick} key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default PostCardList;