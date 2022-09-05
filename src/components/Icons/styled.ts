import styled from 'styled-components';

const crossMargin = '20px';

interface IconWrapProps {
  type: ToastType;
}
export const IconWrap = styled.div<IconWrapProps>`
  fill: ${({ theme, type }) => theme.type[type].color};
  width: ${({ theme }) => theme.iconSizes.l};
  height: ${({ theme }) => theme.iconSizes.l};

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.iconSizes.m};
    height: ${({ theme }) => theme.iconSizes.m};
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.iconSizes.s};
    height: ${({ theme }) => theme.iconSizes.s};
  }
`;

export const CrossWrap = styled.div<IconWrapProps>`
  cursor: pointer;
  position: absolute;
  right: ${crossMargin};
  top: ${crossMargin};
  fill: ${({ theme, type }) => theme.type[type].color};

  width: ${({ theme }) => theme.iconSizes.crossSizes.l};
  height: ${({ theme }) => theme.iconSizes.crossSizes.l};

  @media screen and ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.iconSizes.crossSizes.m};
    height: ${({ theme }) => theme.iconSizes.crossSizes.m};
  }

  @media screen and ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.iconSizes.crossSizes.s};
    height: ${({ theme }) => theme.iconSizes.crossSizes.s};
  }
`;
