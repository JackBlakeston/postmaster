import { useEffect, useRef, useState } from 'react';

import { DELETE, EDIT, MODIFY_POST } from '../../constants';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import DropdownItem from '../DropdownItem/DropdownItem';
import styles from './Dropdown.module.scss';
import { ReactComponent as DotsIcon } from '../../assets/icons/dots.svg';

interface IDropdownProps {
  iconClassName?: string;
  handleEditPostClick: React.MouseEventHandler<HTMLDivElement>;
  handleDeletePostClick: React.MouseEventHandler<HTMLDivElement>;
}

const Dropdown = ({ iconClassName, handleEditPostClick, handleDeletePostClick }: IDropdownProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current) {
      if (!dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
  };

  const handleOpenDropdown = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className={`${styles.dotsContainer} ${iconClassName}`} onClick={handleOpenDropdown}>
        <DotsIcon aria-label={MODIFY_POST}/>
      </div>
      {isOpen &&
        <div ref={dropdownRef} className={styles.mainContainer}>
          <DropdownItem label={EDIT} handleClick={handleEditPostClick}>
            <EditIcon className={styles.icon} />
          </DropdownItem>
          <DropdownItem label={DELETE} handleClick={handleDeletePostClick}>
            <DeleteIcon className={styles.icon} />
          </DropdownItem>
        </div>
      }
    </>
  );
};

export default Dropdown;