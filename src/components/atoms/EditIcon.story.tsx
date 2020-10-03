import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import EditIcon, { Props as EditIconProps } from './EditIcon'

export default {
  title: 'atoms/Icon-Edit',
  components: EditIcon,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story<EditIconProps> = (args) => <EditIcon {...args} />

export const Sample = Template.bind({})
Sample.args = { id: 1, size: 50 }
