import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { LinkStatus } from '@/utils/consts'
import SubmitButton, { Props as SubmitButtonProps } from './SubmitButton'

export default {
  title: 'atoms/Button-Submit',
  compomemts: SubmitButton,
  argTypes: {
    status: {
      description: 'string',
    },
    size: {
      description: 'string',
    },
  },
} as Meta

const Template: Story<SubmitButtonProps> = (args) => <SubmitButton {...args} />

export const Login = Template.bind({})
Login.args = {
  status: LinkStatus.LOGIN,
  size: 'md',
}
export const Signup = Template.bind({})
Signup.args = {
  status: LinkStatus.SIGNUP,
  size: 'md',
}
export const Partner = Template.bind({})
Partner.args = {
  status: LinkStatus.PARTNER_LOGIN,
  size: 'md',
}
export const Send = Template.bind({})
Send.args = {
  status: LinkStatus.SUBMIT,
  size: 'md',
}
export const Change = Template.bind({})
Change.args = {
  status: LinkStatus.CHANGE,
  size: 'md',
}
export const Register = Template.bind({})
Register.args = {
  status: LinkStatus.REGISTER,
  size: 'md',
}
export const Delete = Template.bind({})
Delete.args = {
  status: LinkStatus.DELETE,
  size: 'md',
}
export const Cancel = Template.bind({})
Cancel.args = {
  status: LinkStatus.CANCEL,
  size: 'md',
}
