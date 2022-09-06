import React from 'react';
import { Story } from '@storybook/react';

import { Toast } from 'components/Toast';

import { ToastList, ToastListProps } from '.';

export default {
  title: 'components/ToastList',
  component: ToastList,
};

const heading = 'Basic Header';
const message =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ';

const basicToasts = [
  <Toast heading={heading} message={message} />,
  <Toast heading={heading} message={message} type="success" />,
  <Toast heading={heading} message={message} type="warning" />,
];

const Template: Story<ToastListProps> = (args) => (
  <ToastList {...args}>{basicToasts}</ToastList>
);

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: 'topLeft',
} as Partial<ToastListProps>;

export const TopRight = Template.bind({});
TopRight.args = {
  position: 'topRight',
} as Partial<ToastListProps>;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: 'bottomLeft',
} as Partial<ToastListProps>;

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: 'bottomRight',
} as Partial<ToastListProps>;
