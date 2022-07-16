import { IPost } from '../../types';
import { capitalize } from '../../utils/utils';
import styles from './PostCard.module.scss';
import Dropdown from '../Dropdown/Dropdown';
import { useAppDispatch } from '../../redux/hooks';
import { postDeleted } from '../../slices/posts/postsSlice';

interface IPostCardProps {
  post: IPost;
  handleEditClick: (post: IPost) => void;
}

const PostCard = ({ post, handleEditClick }: IPostCardProps) => {

  const dispatch = useAppDispatch();

  const handleDeletePostClick = () => {
    dispatch(postDeleted(post.id));
  };

  const handleEditPostClick = () => {
    handleEditClick(post);
  };

  return (
    <div className={styles.mainContainer}>
      <Dropdown
        iconClassName={styles.dropdownIcon}
        handleEditPostClick={handleEditPostClick}
        handleDeletePostClick={handleDeletePostClick}
      />
      <span className={styles.userIdText}>Posted by User {post.userId}</span>
      <h2>{capitalize(post.title)}</h2>
      <span>{capitalize(post.body)}</span>
    </div>
  );
};

export default PostCard;