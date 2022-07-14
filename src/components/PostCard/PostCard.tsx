import { IPost } from "../../interfaces";
import { capitalize } from "../../utils";
import PostCardOverlay from "../PostCardOverlay/PostCardOverlay";
import styles from './PostCard.module.scss';

interface IPostCardProps {
  post: IPost;
  handleEditPostClick: (postId: number) => void;
}

const PostCard = ({ post, handleEditPostClick }: IPostCardProps) => {

  return (
    <div className={styles.mainContainer}>
      <PostCardOverlay post={post} handleEditPostClick={handleEditPostClick}/>
      <div className={styles.idContainer}>
        <span>Posted by User {post.userId}</span>
        <span>Post id: {post.id}</span>
      </div>
      <h2>{capitalize(post.title)}</h2>
      <span>{capitalize(post.body)}</span>
    </div>
  );
};

export default PostCard;