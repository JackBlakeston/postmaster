import { useEffect } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  handleClose: React.MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ isVisible, children, handleClose }: IModalProps) => {

  useEffect(() => {
    isVisible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.mainContainer} onMouseDown={handleClose}>
      <div className={styles.modalBox}>
        {children}
      </div>
    </div>
  );
};

export default Modal;