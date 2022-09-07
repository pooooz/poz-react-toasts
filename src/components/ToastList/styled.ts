import styled, { css } from 'styled-components';

interface ToastListWrapProps {
  position: ToastListPosition;
}

export const ToastListWrap = styled.ul<ToastListWrapProps>`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  ${({ position }) =>
    css`
      margin-top: 10px;
      margin-bottom: 10px;
      ${position.includes('top') ? 'top' : 'bottom'}: 0;
    `}
  ${({ position }) =>
    css`
      margin-left: 10px;
      margin-right: 10px;
      ${position.toLowerCase().includes('left') ? 'left' : 'right'}: 0;
    `}

  width: ${({ theme }) => theme.containerSizes.l};

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.containerSizes.m};
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.containerSizes.s};
  }
`;
