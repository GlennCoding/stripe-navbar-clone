import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import LinkWithIcon, { Props } from './LinkWithIcon';

export default {
  component: LinkWithIcon,
  title: 'LinkWithIcon',
} as Meta;

const Template: Story<Props> = (args) => <LinkWithIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: '',
  title: 'Button',
  link: '/',
};
