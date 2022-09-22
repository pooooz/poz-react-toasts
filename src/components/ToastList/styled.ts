import styled from 'styled-components';

import { ToastListWrapProps } from './interfaces';

export const ToastListWrap = styled.ul<ToastListWrapProps>`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  margin: ${({ theme }) => theme.spaces.s}px;

  ${({ position }) => (position.includes('top') ? 'top' : 'bottom')}: 0;
  ${({ position }) =>
    position.toLowerCase().includes('left') ? 'left' : 'right'}: 0;

  width: ${({ theme }) => theme.containerSizes.l}px;

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.containerSizes.m}px;
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.containerSizes.s}px;
  }
`;
