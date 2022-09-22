import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

import { ToastList } from 'components/ToastList';
import { ToastManager } from 'services/ToastService';
import { defaultTheme } from 'theme';

export const ToastContainer = () => {
  const toastRef = useRef<ToastRefActions>(null);

  useEffect(() => {
    if (toastRef) {
      ToastManager.init(toastRef);
    }
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastList ref={toastRef} />
    </ThemeProvider>
  );
};
