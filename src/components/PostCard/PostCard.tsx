import { IPost } from "../../interfaces";
import styles from './PostCard.module.css';

interface IPostCardProps {
  post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <div className={styles.mainContainer}>
      <p>User id: {post.userId}</p>
      <p>Post id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default PostCard;