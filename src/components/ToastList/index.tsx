import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from 'theme';

import { ToastListWrap } from './styled';

export interface ToastListProps {
  position: ToastListPosition;
  children: JSX.Element[] | JSX.Element;
}

export const ToastList = ({ position, children }: ToastListProps) => (
  <ThemeProvider theme={defaultTheme}>
    <ToastListWrap position={position}>{children}</ToastListWrap>
  </ThemeProvider>
);
