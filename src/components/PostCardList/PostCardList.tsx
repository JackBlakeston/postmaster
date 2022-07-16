import { useState } from 'react';

import styles from './PostCardList.module.scss';
import PostCard from '../PostCard/PostCard';
import Modal from '../Modal/Modal';
import PostForm from '../PostForm/PostForm';
import { FetchStatus, IPost } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchPosts, selectAllPosts, selectError, selectStatus } from '../../slices/posts/postsSlice';
import { ClipLoader } from 'react-spinners';
import { LOADER_COLOR } from '../../constants';

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
  };

  let content;

  if (postStatus === FetchStatus.FAILED) {
    content = <p>There was an error while retrieving posts: {error}</p>;
  } else if (postStatus === FetchStatus.SUCCEEDED) {
    content = posts.map(post => {
      return (
        <PostCard
          handleEditClick={openEditPostModal}
          key={post.id}
          post={post}
        />
      );
    });
  }

  return (
    <>
      <div className={styles.loaderContainer}>
        <ClipLoader color={LOADER_COLOR} loading={postStatus === FetchStatus.LOADING} size={150} />
      </div>
      <Modal isVisible={isEditModalVisible} setIsModalVisible={setIsEditModalVisible}>
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