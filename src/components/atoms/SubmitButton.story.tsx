import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { LinkStatus } from '@/utils/consts'
import SubmitButton, { Props as SubmitButtonProps } from './SubmitButton'

export default {
  title: 'atoms/SubmitButton',
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

export const LoginButton = Template.bind({})
LoginButton.args = {
  status: LinkStatus.LOGIN,
  size: 'md',
}
export const SignupButton = Template.bind({})
SignupButton.args = {
  status: LinkStatus.SIGNUP,
  size: 'md',
}
export const PartnerButton = Template.bind({})
PartnerButton.args = {
  status: LinkStatus.PARTNER_LOGIN,
  size: 'md',
}
export const SendButton = Template.bind({})
SendButton.args = {
  status: LinkStatus.SUBMIT,
  size: 'md',
}
export const ChangeButton = Template.bind({})
ChangeButton.args = {
  status: LinkStatus.CHANGE,
  size: 'md',
}
export const RegisterButton = Template.bind({})
RegisterButton.args = {
  status: LinkStatus.REGISTER,
  size: 'md',
}
export const DeleteButton = Template.bind({})
DeleteButton.args = {
  status: LinkStatus.DELETE,
  size: 'md',
}
export const CancelButton = Template.bind({})
CancelButton.args = {
  status: LinkStatus.CANCEL,
  size: 'md',
}
