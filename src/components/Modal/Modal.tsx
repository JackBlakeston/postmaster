import { useEffect } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ isVisible, children, setIsModalVisible }: IModalProps) => {

  useEffect(() => {
    isVisible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [isVisible]);

  if (!isVisible) return null;

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      setIsModalVisible(false);
    }
  };

  return (
    <div className={styles.mainContainer} onMouseDown={closeModal}>
      <div className={styles.modalBox}>
        {children}
      </div>
    </div>
  );
};

export default Modal;