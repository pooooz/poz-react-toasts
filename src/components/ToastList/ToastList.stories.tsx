import React from 'react';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Toast } from 'components/Toast';
import { defaultTheme } from 'theme';

import { ToastListWrap } from './styled';

const heading = 'Basic Header';
const message =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ';

const toasts = [
  { id: '1', heading, message },
  { id: '2', heading, message, type: 'success' as ToastType },
  { id: '3', heading, message, type: 'warning' as ToastType },
];

const ToastList = ({ position }: { position: ToastListPosition }) => (
  <ThemeProvider theme={defaultTheme}>
    <ToastListWrap position={position}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </ToastListWrap>
  </ThemeProvider>
);

export default {
  title: 'components/ToastList',
  component: ToastList,
};

const Template: Story<{ position: ToastListPosition }> = (args) => (
  <ToastList {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: 'topLeft',
};

export const TopRight = Template.bind({});
TopRight.args = {
  position: 'topRight',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: 'bottomLeft',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: 'bottomRight',
};
