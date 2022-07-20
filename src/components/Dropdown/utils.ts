import { useEffect } from 'react';

export const useEventListener = (handlerFunction: (event: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener('mousedown', handlerFunction);
    return () => document.removeEventListener('mousedown', handlerFunction);
  }, []);
};