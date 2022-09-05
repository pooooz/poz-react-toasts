import React from 'react';
import { Story } from '@storybook/react';

import { ToastList, ToastListProps } from '.';

export default {
  title: 'components/ToastList',
  component: ToastList,
};

const Template: Story<ToastListProps> = (args) => <ToastList {...args} />;

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
