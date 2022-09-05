import React from 'react';

import { Heading, Message, TextWrap, ToastWrap } from './styled';

import { iconsMap } from '../../constants';
import { CrossIcon } from '../Icons';

export interface ToastProps {
  type?: ToastType;
  heading: string;
  message?: string;
}

export const Toast = ({ type = 'info', heading, message }: ToastProps) => {
  const Icon = iconsMap.get(type);
  return (
    <ToastWrap type={type}>
      {Icon && <Icon type={type} />}
      <TextWrap position={message ? 'normal' : 'center'}>
        <Heading type={type}>{heading}</Heading>
        {message && <Message type={type}>{message}</Message>}
      </TextWrap>
      <CrossIcon type={type} />
    </ToastWrap>
  );
};
