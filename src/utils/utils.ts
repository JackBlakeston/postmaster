import { useEffect } from 'react';

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const useStopScroll = (isVisible: boolean) => {
  useEffect(() => {
    isVisible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  }, [isVisible]);
};

export const closeOnOverlayClick = (
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  if (event.currentTarget === event.target) {
    setIsVisible(false);
  }
};