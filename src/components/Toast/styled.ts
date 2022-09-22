import styled from 'styled-components';

import { determineAnimation } from 'helpers/animations';

import { TextWrapProps, ToastTypeProps, ToastWrapProps } from './interfaces';

const TOAST_BORDER_RADIUS = 24;
const FULL = '100%';

const TOAST_WRAP_SHADOW = '4px 4px 8px rgba(0, 0, 0, 0.3)';

export const ToastWrap = styled.div<ToastWrapProps>`
  display: flex;
  align-items: center;
  position: relative;

  animation: ${({ animationName }) => determineAnimation(animationName)}
    ${({ animationTime }) => {
      if (animationTime) {
        return animationTime;
      }
      return 1000;
    }}ms;

  padding: ${({ theme }) => theme.spaces.s}px
    ${({ theme }) => theme.spaces.xl}px;
  margin: ${({ theme, spaces }) => spaces || theme.spaces.s}px 0 0 0;

  background: ${({ theme, type }) => theme.type[type].background};
  color: ${({ theme, type }) => theme.type[type].color};
  box-shadow: ${TOAST_WRAP_SHADOW};
  border-radius: ${TOAST_BORDER_RADIUS}px;

  height: ${({ theme }) => theme.toastHeights.l}px;

  @media screen and ${({ theme }) => theme.device.tablet} {
    height: ${({ theme }) => theme.toastHeights.m}px;
    padding: ${({ theme }) => theme.spaces.s}px
      ${({ theme }) => theme.spaces.l}px;
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    height: ${({ theme }) => theme.toastHeights.s}px;
    padding: ${({ theme }) => theme.spaces.s}px
      ${({ theme }) => theme.spaces.s}px;
  }
`;

export const TextWrap = styled.div<TextWrapProps>`
  margin: 0 0 0 ${({ theme }) => theme.fontSizes.m}px;
  height: ${FULL};
  display: flex;
  justify-content: ${({ position = 'normal' }) => position};
  flex-direction: column;

  @media screen and ${({ theme }) => theme.device.mobileL} {
    margin: 0 0 0 ${({ theme }) => theme.spaces.s}px;
  }
`;

export const Heading = styled.h2<ToastTypeProps>`
  margin: 0;
  color: ${({ theme, type }) => theme.type[type].color};
  font-size: ${({ theme }) => theme.fontSizes.l};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: ${({ theme }) => theme.containerSizes.s}px;

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.containerSizes.xs}px;
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const Message = styled.p<ToastTypeProps>`
  margin: ${({ theme }) => theme.spaces.s}px 0 0 0;
  color: ${({ theme, type }) => theme.type[type].color};
  font-size: ${({ theme }) => theme.fontSizes.m};

  overflow: hidden;

  width: ${({ theme }) => theme.containerSizes.s}px;

  @media screen and ${({ theme }) => theme.device.mobileL} {
    margin: 0;
    width: ${({ theme }) => theme.containerSizes.xs}px;
    font-size: ${({ theme }) => theme.fontSizes.s}px;
  }
`;
