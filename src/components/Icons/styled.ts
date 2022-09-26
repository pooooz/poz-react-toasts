import styled from 'styled-components';

import { IconProps } from './interfaces';

export const IconWrap = styled.div<IconProps>`
  fill: ${({ theme, type }) => theme.type[type].color};
  width: ${({ theme }) => theme.iconSizes.l}px;
  height: ${({ theme }) => theme.iconSizes.l}px;

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.iconSizes.m}px;
    height: ${({ theme }) => theme.iconSizes.m}px;
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.iconSizes.s}px;
    height: ${({ theme }) => theme.iconSizes.s}px;
  }
`;

export const IconImage = styled.img<IconProps>`
  filter: ${({ theme, type }) => theme.type[type].iconColor};
`;
