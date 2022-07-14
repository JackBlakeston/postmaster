import styles from './DropdownItem.module.scss';

interface IDropdownItemProps {
  label: string;
  children: JSX.Element;
}

const DropdownItem = ({ label, children }: IDropdownItemProps) => {

  return (
    <div className={styles.mainContainer}>
      {children}
      <span>{label}</span>
    </div>
  );
};

export default DropdownItem;