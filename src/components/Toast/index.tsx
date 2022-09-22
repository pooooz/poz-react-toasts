import React, { memo, useState } from 'react';

import { CrossIcon } from 'components/Icons';
import { useToastAnimation } from 'hooks';

import { iconsMap } from 'constants/index';

import { ToastProps } from './interfaces';
import { Heading, Message, TextWrap, ToastWrap } from './styled';

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
    spaces,
  }: ToastProps) => {
    const { animation, deleteWithAnimation } = useToastAnimation({
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
        deleteWithAnimation();
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
        deleteWithAnimation();
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
        spaces={spaces}
      >
        {Icon && <Icon type={type} />}
        <TextWrap position={message ? 'normal' : 'center'}>
          <Heading type={type}>{heading}</Heading>
          {message && <Message type={type}>{message}</Message>}
        </TextWrap>
        <CrossIcon type={type} destroy={deleteWithAnimation} />
      </ToastWrap>
    );
  }
);
