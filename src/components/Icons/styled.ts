import styled from 'styled-components';

const crossMargin = '20px';

interface IconWrapProps {
  type: ToastType;
}
export const IconWrap = styled.div<IconWrapProps>`
  fill: ${({ theme, type }) => theme.type[type].color};
`;

export const CrossWrap = styled.div<IconWrapProps>`
  cursor: pointer;
  position: absolute;
  right: ${crossMargin};
  top: ${crossMargin};
  fill: ${({ theme, type }) => theme.type[type].color};
`;
