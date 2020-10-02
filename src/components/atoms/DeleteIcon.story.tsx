import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import DeleteIcon, { Props as DeleteIconProps } from './DeleteIcon'

export default {
  title: 'atoms/Icon-Delete',
  components: DeleteIcon,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story<DeleteIconProps> = (args) => <DeleteIcon {...args} />

export const Sample = Template.bind({})
Sample.args = { id: 1, size: 50 }
