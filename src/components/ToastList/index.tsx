import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ToastListWrap } from './styled';

import { Toast } from '../Toast';
import { defaultTheme } from '../../theme';

export interface ToastListProps {
  position: ToastListPosition;
}

export const ToastList = ({ position }: ToastListProps) => (
  <ThemeProvider theme={defaultTheme}>
    <ToastListWrap position={position}>
      <Toast heading="Hello there" type="success" />
      <Toast heading="Hello there" type="warning" />
      <Toast heading="Basic header" message="Hello there" type="info" />
      <Toast heading="Hello there" type="error" />
    </ToastListWrap>
  </ThemeProvider>
);
