import React from 'react';
import { Story } from '@storybook/react';

import { ToastList } from 'components/ToastList';

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
  <ToastList position="topLeft">
    <Toast {...args} />
  </ToastList>
);

const heading = 'Basic Header';
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ';
const generalArgs = {
  heading,
  message,
};

const generalParameters = {
  controls: { exclude: ['type', 'destroy', 'duration'] },
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
