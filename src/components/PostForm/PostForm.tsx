import { useState } from "react";

import Button from "../Button/Button";
import styles from './PostForm.module.scss';

const PostForm = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const onBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value)
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
      />
    </form>
  );
};

export default PostForm;