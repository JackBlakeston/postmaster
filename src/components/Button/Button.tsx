import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // TODO remove optional prop
  children?: JSX.Element;
}

const Button = ({ text, onClick, children }: IButtonProps) => {

  return (
    <button onClick={onClick} className={styles.mainContainer}>
      <span>{text}</span>
      {children}
    </button>
  );
};

export default Button;