import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { selectUserById } from '../../slices/users/usersSlice';
import { IPost } from '../../types';
import { capitalize } from '../../utils/utils';
import Button from '../Button/Button';
import styles from './ExpandedPost.module.scss';
import { DELETE, EDIT } from '../../constants';
import { postDeleted } from '../../slices/posts/postsSlice';

interface IExpandedPostProps {
  post: IPost;
  handleEditClick: (post: IPost) => void;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandedPost = ({ post, handleEditClick, setIsModalVisible }: IExpandedPostProps) => {

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => selectUserById(state, post.userId));

  const handleEditPostClick = () => {
    handleEditClick(post);
  };

  const handleDeletePostClick = () => {
    dispatch(dispatch(postDeleted(post.id)));
    setIsModalVisible(false);
  };

  return (
    <div className={styles.mainContainer}>
      <h2>{capitalize(post.title)}</h2>
      <span className={styles.posterInfoText}>Posted by {user?.username}</span>
      <span className={styles.bodyText}>{capitalize(post.body)}</span>
      <div className={styles.buttonsContainer}>
        <Button
          text={DELETE}
          onClick={handleDeletePostClick}
        >
          <DeleteIcon className={styles.icon}/>
        </Button>
        <Button
          text={EDIT}
          onClick={handleEditPostClick}
        >
          <EditIcon className={styles.icon}/>
        </Button>
      </div>
    </div>
  );
};

export default ExpandedPost;