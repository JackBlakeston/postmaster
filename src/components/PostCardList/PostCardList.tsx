import styles from './PostCardList.module.css';
import PostCard from '../PostCard/PostCard';
import { useFetchPostsQuery } from '../../features/postsApi/postsApiSlice';

const PostCardList = () => {

  const { data = [], isFetching } = useFetchPostsQuery();

  return (
    <div className={styles.mainContainer}>
      {isFetching ?
        <p>Content is loading</p>
        :
        data.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default PostCardList;