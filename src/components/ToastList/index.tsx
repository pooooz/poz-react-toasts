import React, { forwardRef, memo, useState } from 'react';
import ReactDOM from 'react-dom';

import { Toast } from 'components/Toast';
import { useToastService } from 'hooks/index';

import { ToastListWrap } from './styled';

export const ToastList = memo(
  forwardRef<ToastRefActions>((_, ref) => {
    const [bodyElement] = useState<HTMLElement>(document.body);

    const { toasts, position } = useToastService(ref);

    return ReactDOM.createPortal(
      <ToastListWrap position={position}>
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </ToastListWrap>,
      bodyElement
    );
  })
);
