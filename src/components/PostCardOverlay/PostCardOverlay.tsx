import { DELETE, EDIT } from "../../constants";
import { IPost } from "../../interfaces";
import Button from "../Button/Button";
import styles from './PostCardOverlay.module.scss';

interface IPostCardOverlayProps {
  post: IPost;
  handleEditPostClick: (postId: number) => void;
}

const PostCardOverlay = ({ post, handleEditPostClick }: IPostCardOverlayProps) => {

  return (
    <div className={styles.mainContainer}>
      <Button
        text={EDIT}
        iconName={EDIT}
        onClick={() => handleEditPostClick(post.id)}
      />
      <Button
        text={DELETE}
        iconName={DELETE}
      />
    </div>
  );
};

export default PostCardOverlay;