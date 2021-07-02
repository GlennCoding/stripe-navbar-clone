import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { Props } from './index';

export default {
  component: Modal,
  title: 'Modal',
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args}>Hello World</Modal>;

export const Show = Template.bind({});
Show.args = {
  showModal: true,
};

export const Hide = Template.bind({});
Hide.args = {
  showModal: false,
};
