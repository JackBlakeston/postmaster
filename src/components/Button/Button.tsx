import styles from './Button.module.scss';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as NewPostIcon } from '../../assets/icons/newPost.svg';
import { DELETE, EDIT, NEW_POST } from '../../constants';
import { iconName } from '../../interfaces';

const getIcon = (iconName: string) => {
  if (iconName === DELETE) {
    return <DeleteIcon className={styles.icon} />
  }
  if (iconName === EDIT) {
    return <EditIcon className={styles.icon} />
  }
  if (iconName === NEW_POST) {
    return <NewPostIcon className={styles.icon} />
  }
}

interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // TODO remove optional prop
  iconName?: iconName;
}

const Button = ({ text, iconName, onClick }: IButtonProps) => {

  let icon;

  if (iconName) {
    icon = getIcon(iconName);
  }

  return (
    <button onClick={onClick} className={styles.mainContainer}>
      <span>{text}</span>
      {icon}
    </button>
  );
};

export default Button;