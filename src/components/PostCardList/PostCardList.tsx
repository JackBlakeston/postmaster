import { useEffect, useState } from 'react';

import styles from './PostCardList.module.scss';
import PostCard from '../PostCard/PostCard';
import Modal from '../Modal/Modal';
import PostForm from '../PostForm/PostForm';
import { FetchStatus, IPost } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchPosts, selectAllPosts, selectError, selectStatus } from '../../slices/posts/postsSlice';
import { ClipLoader } from 'react-spinners';
import { LOADER_COLOR } from '../../constants';
import { selectAllFilters } from '../../slices/filters/filtersSlice';
import { filterAndSortPosts } from './utils';
import ExpandedPost from '../ExpandedPost/ExpandedPost';

const PostCardList = () => {

  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);
  const postStatus = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);
  const filters = useAppSelector(selectAllFilters);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(posts);
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);

  useEffect(() => {
    const filtered = filterAndSortPosts(posts, filters);
    setFilteredPosts(filtered);
  }, [filters, posts]);

  if (postStatus === FetchStatus.IDLE) {
    dispatch(fetchPosts());
  }

  const openEditPostModal = (post: IPost) => {
    setModalContent(
      <PostForm
        setIsModalVisible={setIsModalVisible}
        postToEdit={post}
        isEditingPost
      />
    );
    setIsModalVisible(true);
  };

  const handleCardClick = (post: IPost) => {
    setModalContent(
      <ExpandedPost
        post={post}
        handleEditClick={openEditPostModal}
        setIsModalVisible={setIsModalVisible}
      />
    );
    setIsModalVisible(true);
  };

  let content;
  if (postStatus === FetchStatus.LOADING) {
    content =
      <div className={styles.loaderContainer}>
        <ClipLoader color={LOADER_COLOR} loading={postStatus === FetchStatus.LOADING} size={150} />
      </div>;
  } else if (postStatus === FetchStatus.FAILED) {
    content = <p>There was an error while retrieving posts: {error}</p>;
  } else if (postStatus === FetchStatus.SUCCEEDED) {
    content = filteredPosts.map(post => {
      return (
        <PostCard
          handleCardClick={handleCardClick}
          handleEditClick={openEditPostModal}
          key={post.id}
          post={post}
        />
      );
    });
  }

  return (
    <>
      <Modal isVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {modalContent}
      </Modal>
      <div className={styles.mainContainer}>
        {content}
      </div>
    </>
  );
};

export default PostCardList;