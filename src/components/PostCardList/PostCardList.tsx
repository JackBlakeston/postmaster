import { useState } from 'react';
import { useSelector } from 'react-redux'

import styles from './PostCardList.module.scss';
import PostCard from '../PostCard/PostCard';
import Modal from '../Modal/Modal';
import { RootState } from '../../redux/store';
import PostForm from '../PostForm/PostForm';
import { IPost } from '../../types';

const PostCardList = () => {

  const posts = useSelector((state: RootState) => state.posts);
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<IPost>();

  const openEditPostModal = (post: IPost) => {
    setIsEditModalVisible(true);
    setSelectedPost(post)
  }

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      setIsEditModalVisible(false);
    }
  }
  // TODO add logic for loading
  return (
    <>
      <Modal isVisible={isEditModalVisible} handleClose={closeModal}>
        <PostForm
          setIsModalVisible={setIsEditModalVisible}
          postToEdit={selectedPost}
          isEditingPost
        />
      </Modal>
      <div className={styles.mainContainer}>
        {/* isFetching ?
          <p>Content is loading</p>
          : */
          posts.map(post => {
            return (
              <PostCard
                handleEditClick={openEditPostModal}
                key={post.id}
                post={post}
              />
            )
          })}
      </div>
    </>
  );
};

export default PostCardList;