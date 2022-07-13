import { IPost } from "../../interfaces";
import { capitalize } from "../../utils";
import styles from './PostCard.module.scss';

interface IPostCardProps {
  post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.idContainer}>
        <span>Posted by User {post.userId}</span>
        <span>Post id: {post.id}</span>
      </div>
      <h2>{capitalize(post.title)}</h2>
      <p>{capitalize(post.body)}</p>
    </div>
  );
};

export default PostCard;