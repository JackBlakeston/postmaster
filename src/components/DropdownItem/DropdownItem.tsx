import styles from './DropdownItem.module.scss';

interface IDropdownItemProps {
  text: string;
  children: JSX.Element;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const DropdownItem = ({ text, children, handleClick }: IDropdownItemProps) => {

  return (
    <div className={styles.mainContainer} onClick={handleClick}>
      {children}
      <span>{text}</span>
    </div>
  );
};

export default DropdownItem;