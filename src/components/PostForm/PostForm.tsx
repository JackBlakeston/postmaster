import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';

import { postAdded, postEdited } from '../../slices/posts/postsSlice';
import { IPost } from '../../types';
import Button from '../Button/Button';
import styles from './PostForm.module.scss';

interface IPostFormProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  postToEdit?: IPost;
  isEditingPost?: boolean;
}

const PostForm = ({ setIsModalVisible, postToEdit, isEditingPost }: IPostFormProps) => {

  const [title, setTitle] = useState<string>(postToEdit ? postToEdit.title : '');
  const [body, setBody] = useState<string>(postToEdit ? postToEdit.body : '');

  const dispatch = useAppDispatch();

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onBodyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleCreatePostClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (title && body) {
      if (isEditingPost) {
        dispatch(postEdited({ id: postToEdit?.id, title, body }));
      } else {
        dispatch(postAdded({ title, body }));
      }
      setIsModalVisible(false);
    }
    // TODO a popup or something for when boxes are empty
  };

  return (
    <div className={styles.mainContainer}>
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
    </div>
  );
};

export default PostForm;