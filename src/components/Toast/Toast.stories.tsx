import React from 'react';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from 'theme';

import { Toast, ToastProps } from '.';

export default {
  title: 'components/Toast',
  component: Toast,
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
  },
};

const Template: Story<ToastProps> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Toast {...args} />
  </ThemeProvider>
);

const heading = 'Basic Header';
const message = 'Lorem ipsum dolor sit ';
const generalArgs = {
  heading,
  message,
};

const generalParameters = {
  controls: {
    exclude: [
      'type',
      'destroy',
      'duration',
      'inAnimationName',
      'outAnimationName',
      'animationTime',
    ],
  },
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  ...generalArgs,
};
Info.parameters = generalParameters;

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  ...generalArgs,
};
Warning.parameters = generalParameters;

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  ...generalArgs,
};
Error.parameters = generalParameters;

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  ...generalArgs,
};
Success.parameters = generalParameters;
