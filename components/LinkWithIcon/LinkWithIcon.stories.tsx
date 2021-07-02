import { Story, Meta } from '@storybook/react/types-6-0';
import LinkWithIcon, { Props } from './index';
import { MdWork } from 'react-icons/md';

export default {
  component: LinkWithIcon,
  title: 'LinkWithIcon',
} as Meta;

const Template: Story<Props> = (args) => <LinkWithIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <MdWork className='w-6 h-6' />,
  title: 'Payments',
  link: '/',
  description: '',
};

export const NoArrow = Template.bind({});
NoArrow.args = {
  ...Default.args,
  arrow: false,
};

export const Description = Template.bind({});
Description.args = {
  ...Default.args,
  description: 'Online Payments',
};

export const LargeIconAndDescription = Template.bind({});
LargeIconAndDescription.args = {
  ...Default.args,
  icon: <MdWork className='w-12 h-12' />,
  description: 'Online Payments',
};
