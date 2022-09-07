import React, {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';

import { defaultTheme } from 'theme';
import { Toast } from 'components/Toast';
import { ToastOptions } from 'core';

import { ToastListWrap } from './styled';

export const ToastList = memo(
  forwardRef<ToastRefActions>((_, ref) => {
    const [bodyElement] = useState<HTMLElement>(document.body);
    const [toasts, setToasts] = useState<ToastOptions[]>([]);
    const [position, setPosition] = useState<ToastListPosition>('bottomLeft');

    const handleAdd = useCallback((toast: ToastOptions) => {
      setToasts((prevToasts) => [...prevToasts, toast]);
    }, []);

    const handleRemove = useCallback((toastId: string) => {
      setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== toastId));
    }, []);

    const handlePosition = useCallback((newPosition: ToastListPosition) => {
      setPosition(newPosition);
    }, []);

    useImperativeHandle(ref, () => ({
      onAdd: handleAdd,
      onRemove: handleRemove,
      onPositionChange: handlePosition,
    }));

    return ReactDOM.createPortal(
      <ThemeProvider theme={defaultTheme}>
        <ToastListWrap position={position}>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </ToastListWrap>
      </ThemeProvider>,
      bodyElement
    );
  })
);
