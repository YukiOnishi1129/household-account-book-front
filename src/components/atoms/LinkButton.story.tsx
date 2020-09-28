import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { LinkStatus } from '@/utils/consts'
import LinkButton, { Props as LinkButtonProps } from './LinkButton'

export default {
  title: 'atoms/LinkButton',
  components: LinkButton,
} as Meta

const Template: Story<LinkButtonProps> = (args) => <LinkButton {...args} />

export const LoginButton = Template.bind({})
LoginButton.args = {
  status: LinkStatus.LOGIN,
}
export const SignButton = Template.bind({})
SignButton.args = {
  status: LinkStatus.SIGNUP,
}
export const PartnerLoginButton = Template.bind({})
PartnerLoginButton.args = {
  status: LinkStatus.PARTNER_LOGIN,
}
export const NormalButton = Template.bind({})
NormalButton.args = {
  status: '',
}
