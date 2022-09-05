import styled from 'styled-components';

const toastBorderRadius = '24px';

interface ToastTypeProps {
  type: ToastType;
}
export const ToastWrap = styled.div<ToastTypeProps>`
  display: flex;
  align-items: center;
  position: relative;

  padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.xl};
  margin: ${({ theme }) => theme.spaces.s} 0 0 0;

  background: ${({ theme, type }) => theme.type[type].background};
  color: ${({ theme, type }) => theme.type[type].color};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: ${toastBorderRadius};

  height: ${({ theme }) => theme.toastHeights.l};

  @media screen and ${({ theme }) => theme.device.tablet} {
    height: ${({ theme }) => theme.toastHeights.m};
    padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.l};
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    height: ${({ theme }) => theme.toastHeights.s};
    padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.s};
  }
`;

interface TextWrapProps {
  position?: 'center' | 'normal';
}
export const TextWrap = styled.div<TextWrapProps>`
  margin: 0 0 0 20px;
  height: 100%;
  display: flex;
  justify-content: ${({ position = 'normal' }) => position};
  flex-direction: column;

  @media screen and ${({ theme }) => theme.device.mobileL} {
    margin: 0 0 0 ${({ theme }) => theme.spaces.s};
  }
`;

export const Heading = styled.h2<ToastTypeProps>`
  margin: 0;
  color: ${({ theme, type }) => theme.type[type].color};
  font-size: ${({ theme }) => theme.fontSizes.l};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: ${({ theme }) => theme.containerSizes.s};

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.containerSizes.xs};
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const Message = styled.p<ToastTypeProps>`
  margin: ${({ theme }) => theme.spaces.s} 0 0 0;
  color: ${({ theme, type }) => theme.type[type].color};
  font-size: ${({ theme }) => theme.fontSizes.m};

  overflow: hidden;

  @media screen and ${({ theme }) => theme.device.mobileL} {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
