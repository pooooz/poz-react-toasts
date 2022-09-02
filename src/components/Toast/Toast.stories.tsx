import React from 'react';
import { Story } from '@storybook/react';

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

const heading = 'Basic Header';
const message =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ' +
  'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ';
const Template: Story<ToastProps> = (args) => <Toast {...args} />;

const generalArgs = {
  heading,
  message,
};

const generalParameters = { controls: { exclude: ['type'] } };

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
