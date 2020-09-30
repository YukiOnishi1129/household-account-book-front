import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import DeleteIcon, { Props as DeleteIconProps } from './DeleteIcon'

export default {
  title: 'atoms/DeleteIcon',
  components: DeleteIcon,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story<DeleteIconProps> = (args) => <DeleteIcon {...args} />

export const SampleDeleteIcon = Template.bind({})
SampleDeleteIcon.args = { id: 1, size: 50 }
