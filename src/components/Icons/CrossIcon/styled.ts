import styled from 'styled-components';

import { IconProps } from 'components/Icons/interfaces';

const crossMargin = 20;

export const CrossWrap = styled.div<IconProps>`
  cursor: pointer;
  position: absolute;
  right: ${crossMargin}px;
  top: ${crossMargin}px;

  width: ${({ theme }) => theme.iconSizes.crossSizes.l}px;
  height: ${({ theme }) => theme.iconSizes.crossSizes.l}px;

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.iconSizes.crossSizes.m}px;
    height: ${({ theme }) => theme.iconSizes.crossSizes.m}px;
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.iconSizes.crossSizes.s}px;
    height: ${({ theme }) => theme.iconSizes.crossSizes.s}px;
  }
`;
