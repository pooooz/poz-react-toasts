import styled from 'styled-components';

const toastBorderRadius = '24px';

interface ToastTypeProps {
  type: ToastType;
}
export const ToastWrap = styled.div<ToastTypeProps>`
  display: flex;
  position: relative;
  align-items: center;
  width: 600px;
  height: 180px;
  padding: 10px 32px;
  background: ${({ theme, type }) => theme.type[type].background};
  color: ${({ theme, type }) => theme.type[type].color};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: ${toastBorderRadius};
`;

export const TextWrap = styled.div`
  margin: 0 0 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2<ToastTypeProps>`
  margin: 0;
  color: ${({ theme, type }) => theme.type[type].color};
  font-size: 32px;
`;

export const Message = styled.p<ToastTypeProps>`
  margin: 10px 0 0 0;
  color: ${({ theme, type }) => theme.type[type].color};
  font-size: 24px;
`;
