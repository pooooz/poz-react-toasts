import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Heading, Message, TextWrap, ToastWrap } from './styled';

import { defaultTheme } from '../../theme';
import { iconsMap } from '../../constants';
import { CrossIcon } from '../Icons';

export interface ToastProps {
  type?: ToastType;
  heading?: string;
  message: string;
}

export const Toast = ({ type = 'info', heading, message }: ToastProps) => {
  const Icon = iconsMap.get(type);
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastWrap type={type}>
        {Icon && <Icon type={type} />}
        <TextWrap>
          {heading && <Heading type={type}>{heading}</Heading>}
          <Message type={type}>{message}</Message>
        </TextWrap>
        <CrossIcon type={type} />
      </ToastWrap>
    </ThemeProvider>
  );
};
