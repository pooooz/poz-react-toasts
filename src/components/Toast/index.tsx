import React, { memo, useState } from 'react';

import { CrossIcon } from 'components/Icons';
import { useAnimation } from 'hooks';

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
    const { animation, handleDelete } = useAnimation({
      inAnimationName,
      outAnimationName,
      animationTime,
      destroy,
      duration,
    });

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const Icon = iconsMap.get(type);

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
      setStartX(event.touches[0].clientX);
      setStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
      if (
        Math.abs(startX - event.touches[0].clientX) > 100 ||
        Math.abs(startY - event.touches[0].clientY) > 100
      ) {
        handleDelete();
      }
    };

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
      setStartX(event.clientX);
      setStartY(event.clientY);
    };

    const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
      if (
        Math.abs(startX - event.clientX) > 100 ||
        Math.abs(startY - event.clientY) > 100
      ) {
        handleDelete();
      }
    };
    return (
      <ToastWrap
        type={type}
        animationName={animation}
        animationTime={animationTime}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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
