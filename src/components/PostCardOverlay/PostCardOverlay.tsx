import { DELETE, EDIT } from "../../constants";
import { IPost } from "../../interfaces";
import Button from "../Button/Button";
import styles from './PostCardOverlay.module.scss';

interface IPostCardOverlayProps {
  post: IPost;
}

const PostCardOverlay = ({ post }: IPostCardOverlayProps) => {

  return (
    <div className={styles.mainContainer}>
      <Button
        text={DELETE}
        iconName={DELETE}
      />
      <Button
        text={EDIT}
        iconName={EDIT}
      />
    </div>
  );
};

export default PostCardOverlay;