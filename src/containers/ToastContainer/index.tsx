import React, { useEffect, useRef } from 'react';

import { ToastList } from 'components/ToastList';
import { ToastManager } from 'core';

export const ToastContainer = () => {
  const toastRef = useRef<ToastRefActions>(null);

  useEffect(() => {
    if (toastRef) {
      ToastManager.init(toastRef);
    }
  }, []);

  return <ToastList ref={toastRef} />;
};
