import styles from './DropdownItem.module.scss';

interface IDropdownItemProps {
  label: string;
  children: JSX.Element;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const DropdownItem = ({ label, children, handleClick }: IDropdownItemProps) => {

  return (
    <div className={styles.mainContainer} onClick={handleClick}>
      {children}
      <span>{label}</span>
    </div>
  );
};

export default DropdownItem;