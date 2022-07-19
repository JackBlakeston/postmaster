import { closeOnOverlayClick, useStopScroll } from '../../utils/utils';
import styles from './Modal.module.scss';

interface IModalProps {
  isVisible: boolean;
  children: React.ReactNode;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ isVisible, children, setIsModalVisible }: IModalProps) => {

  useStopScroll(isVisible);

  if (!isVisible) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    closeOnOverlayClick(setIsModalVisible, event);
  };

  return (
    <div className={styles.mainContainer} onMouseDown={handleOverlayClick}>
      <div className={styles.modalBox}>
        {children}
      </div>
    </div>
  );
};

export default Modal;