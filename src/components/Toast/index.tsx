import React, { memo, useEffect, useState } from 'react';

import { CrossIcon } from 'components/Icons';

import { iconsMap } from 'constants/index';

import { Heading, Message, TextWrap, ToastWrap } from './styled';

export interface ToastProps {
  type?: ToastType;
  heading: string;
  message?: string;
  duration?: number;
  inAnimationName?: InAnimationName;
  outAnimationName?: OutAnimationName;
  animationTime?: number;
  destroy: () => void;
}

export const Toast = memo(
  ({
    type = 'info',
    heading,
    message,
    duration,
    inAnimationName,
    outAnimationName,
    animationTime,
    destroy,
  }: ToastProps) => {
    const [animation, setAnimation] = useState<
      InAnimationName | OutAnimationName | null
    >(inAnimationName || null);

    const Icon = iconsMap.get(type);

    let animationTimer: NodeJS.Timer;
    let destroyTimer: NodeJS.Timer;

    useEffect(() => {
      if (!duration || !destroy) return;

      if (outAnimationName) {
        animationTimer = setTimeout(() => {
          setAnimation(outAnimationName as OutAnimationName);
        }, duration - (animationTime || 0));
      }

      destroyTimer = setTimeout(() => {
        destroy();
      }, duration);

      return () => {
        clearTimeout(animationTimer);
        clearTimeout(destroyTimer);
      };
    }, [destroy, duration]);

    const handleDelete = () => {
      if (destroyTimer) {
        clearTimeout(destroyTimer);
      }
      if (animationTimer) {
        clearTimeout(animationTimer);
      }

      if (!outAnimationName) {
        destroy();
      }
      setAnimation(outAnimationName as OutAnimationName);
      setTimeout(() => destroy(), (animationTime || 1000) - 100);
    };

    return (
      <ToastWrap
        type={type}
        animationName={animation}
        animationTime={animationTime}
        duration={duration}
      >
        {Icon && <Icon type={type} />}
        <TextWrap position={message ? 'normal' : 'center'}>
          <Heading type={type}>{heading}</Heading>
          {message && <Message type={type}>{message}</Message>}
        </TextWrap>
        <CrossIcon type={type} destroy={handleDelete} />
      </ToastWrap>
    );
  }
);
