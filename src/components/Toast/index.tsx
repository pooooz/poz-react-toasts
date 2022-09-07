import React, { memo, useEffect } from 'react';

import { CrossIcon } from 'components/Icons';

import { iconsMap } from 'constants/index';

import { Heading, Message, TextWrap, ToastWrap } from './styled';

export interface ToastProps {
  type?: ToastType;
  heading: string;
  message?: string;
  duration?: number;
  destroy?: () => void;
}

export const Toast = memo(
  ({ type = 'info', heading, message, duration, destroy }: ToastProps) => {
    const Icon = iconsMap.get(type);

    useEffect(() => {
      if (!duration || !destroy) return;

      const timer = setTimeout(() => {
        destroy();
      }, duration);

      return () => clearTimeout(timer);
    }, [destroy, duration]);

    return (
      <ToastWrap type={type}>
        {Icon && <Icon type={type} />}
        <TextWrap position={message ? 'normal' : 'center'}>
          <Heading type={type}>{heading}</Heading>
          {message && <Message type={type}>{message}</Message>}
        </TextWrap>
        <CrossIcon type={type} destroy={destroy} />
      </ToastWrap>
    );
  }
);
