import { useState } from "react";
import { useDispatch } from 'react-redux';

import { postAdded } from '../../slices/posts/postsSlice';
import Button from "../Button/Button";
import styles from './PostForm.module.scss';

interface IPostFormProps {
  setIsPostModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostForm = ({ setIsPostModalVisible }: IPostFormProps) => {

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const dispatch = useDispatch();

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const onBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value)
  }

  const handleCreatePostClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (title && body) {
      dispatch(postAdded({ title, body }));
      setIsPostModalVisible(false);
    }
    // TODO a popup or something for when boxes are empty
  }

  return (
    <form className={styles.mainContainer}>
      <label>Post Title</label>
      <input
        type="text"
        name="postTitle"
        value={title}
        onChange={onTitleChange}
      />
      <label>Post Body</label>
      <textarea
        className={styles.bodyInput}
        name="postBody"
        value={body}
        onChange={onBodyChange}
      />
      <Button
        text='Create post'
        onClick={handleCreatePostClick}
      />
    </form>
  );
};

export default PostForm;