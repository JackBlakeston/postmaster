import classNames from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // TODO remove optional prop
  children?: JSX.Element;
  isDisabled?: boolean;
}

const Button = ({ text, onClick, children, isDisabled }: IButtonProps) => {

  const mainContainerClassNames = classNames({
    [styles.mainContainer]: true,
    [styles.disabled]: isDisabled,
  });

  return (
    <button onClick={onClick} className={mainContainerClassNames} disabled={isDisabled}>
      <span>{text}</span>
      {children}
    </button>
  );
};

export default Button;