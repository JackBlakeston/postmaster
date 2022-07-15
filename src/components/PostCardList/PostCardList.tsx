import { useState } from 'react';

import styles from './PostCardList.module.scss';
import PostCard from '../PostCard/PostCard';
import Modal from '../Modal/Modal';
import PostForm from '../PostForm/PostForm';
import { FetchStatus, IPost } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchPosts, selectAllPosts, selectError, selectStatus } from '../../slices/posts/postsSlice';

const PostCardList = () => {

  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<IPost>();

  if (postStatus === FetchStatus.IDLE) {
    dispatch(fetchPosts());
  }

  const openEditPostModal = (post: IPost) => {
    setIsEditModalVisible(true);
    setSelectedPost(post);
  }

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      setIsEditModalVisible(false);
    }
  }

  let content;

  if (postStatus === FetchStatus.LOADING) {
    content = <p>Content is loading</p>;
  } else if (postStatus === FetchStatus.FAILED) {
    content = <p>There was an error while retrieving posts: {error}</p>
  } else if (postStatus === FetchStatus.SUCCEEDED) {
    // console.log(posts);
    content = posts.map(post => {
      return (
        <PostCard
          handleEditClick={openEditPostModal}
          key={post.id}
          post={post}
        />
      )
    });
  }

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
        {content}
      </div>
    </>
  );
};

export default PostCardList;