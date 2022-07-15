import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';

import { postAdded, postEdited } from '../../slices/posts/postsSlice';
import { IPost } from '../../types';
import Button from '../Button/Button';
import styles from './PostForm.module.scss';

interface IPostFormProps {
  postToEdit?: IPost;
  isEditingPost?: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
  };

  const handleDiscardClick = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.mainContainer}>
      <input
        placeholder='Post Title'
        type='text'
        value={title}
        onChange={onTitleChange}
        className={styles.titleInput}
      />
      <textarea
        placeholder='Post body'
        value={body}
        onChange={onBodyChange}
        className={styles.bodyInput}
      />
      <div className={styles.buttonsContainer}>
        <Button
          text='Discard'
          onClick={handleDiscardClick}
        />
        <Button
          text='Create post'
          onClick={handleCreatePostClick}
          isDisabled={title === '' || body === ''}
        />
      </div>
    </div>
  );
};

export default PostForm;