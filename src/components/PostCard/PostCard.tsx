import { IPost } from '../../types';
import { capitalize } from '../../utils/utils';
import styles from './PostCard.module.scss';
import Dropdown from '../Dropdown/Dropdown';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { postDeleted } from '../../slices/posts/postsSlice';
import { selectUserById } from '../../slices/users/usersSlice';

interface IPostCardProps {
  post: IPost;
  handleEditClick: (post: IPost) => void;
  handleCardClick: (post: IPost) => void;
}

const PostCard = ({ post, handleEditClick, handleCardClick }: IPostCardProps) => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => selectUserById(state, post.userId));

  const handleDeletePostClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(postDeleted(post.id));
  };

  const handleEditPostClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    handleEditClick(post);
  };

  const handleMainCardClick = () => {
    handleCardClick(post);
  };

  return (
    <div className={styles.mainContainer} onClick={handleMainCardClick}>
      <Dropdown
        iconClassName={styles.dropdownIcon}
        handleEditPostClick={handleEditPostClick}
        handleDeletePostClick={handleDeletePostClick}
      />
      <span className={styles.posterInfoText}>Posted by {user?.username}</span>
      <h2>{capitalize(post.title)}</h2>
      <span>{capitalize(post.body)}</span>
      <div className={styles.effectOverlay}></div>
    </div>
  );
};

export default PostCard;