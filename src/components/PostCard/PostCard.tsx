import { IPost } from "../../types";
import { capitalize } from "../../utils";
import styles from './PostCard.module.scss';
import Dropdown from "../Dropdown/Dropdown";

interface IPostCardProps {
  post: IPost;
  handleEditPostClick: (postId: number) => void;
}

const PostCard = ({ post, handleEditPostClick }: IPostCardProps) => {

  return (
    <div className={styles.mainContainer}>
      <Dropdown iconClassName={styles.dropdownIcon}/>
      {/* <PostCardOverlay post={post} handleEditPostClick={handleEditPostClick}/> */}
      <span className={styles.userIdText}>Posted by User {post.userId}</span>
      <h2>{capitalize(post.title)}</h2>
      <span>{capitalize(post.body)}</span>
    </div>
  );
};

export default PostCard;