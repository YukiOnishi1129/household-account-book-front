import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { LinkStatus } from '@/utils/consts'
import LinkButtonField, {
  Props as LinkButtonFieldProps,
} from './LinkButtonField'

export default {
  title: 'molcules/LinkButtonField',
  components: LinkButtonField,
  argType: {
    status: {
      description: 'string',
    },
  },
} as Meta

const Template: Story<LinkButtonFieldProps> = (args) => (
  <LinkButtonField {...args} />
)

export const Login = Template.bind({})
Login.args = {
  status: LinkStatus.LOGIN,
}
