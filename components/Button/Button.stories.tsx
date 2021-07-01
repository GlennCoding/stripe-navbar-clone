import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { Props } from './index';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<Props> = (args) => <Button {...args}>Sign In</Button>;

export const Blue = Template.bind({});
Blue.args = {
  label: 'Sign in',
  color: 'blue',
};

export const Transparent = Template.bind({});
Transparent.args = {
  label: 'Sign in',
  color: 'gray',
};
