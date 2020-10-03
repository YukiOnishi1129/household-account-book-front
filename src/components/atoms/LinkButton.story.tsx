import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { LinkStatus } from '@/utils/consts'
import LinkButton, { Props as LinkButtonProps } from './LinkButton'

export default {
  title: 'atoms/Button-Link',
  components: LinkButton,
} as Meta

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />

export const Login = Template.bind({})
Login.args = {
  status: LinkStatus.LOGIN,
}
export const Signup = Template.bind({})
Signup.args = {
  status: LinkStatus.SIGNUP,
}
export const PartnerLogin = Template.bind({})
PartnerLogin.args = {
  status: LinkStatus.PARTNER_LOGIN,
}
export const Normal = Template.bind({})
Normal.args = {
  status: '',
}
