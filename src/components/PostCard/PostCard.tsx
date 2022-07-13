import { IPost } from "../../interfaces";
import { capitalize } from "../../utils";
import PostCardOverlay from "../PostCardOverlay/PostCardOverlay";
import styles from './PostCard.module.scss';

interface IPostCardProps {
  post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => {

  return (
    <div className={styles.mainContainer}>
      <PostCardOverlay post={post}/>
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