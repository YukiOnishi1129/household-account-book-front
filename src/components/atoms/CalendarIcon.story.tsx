import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CalendarIcon, { Props as CalendarIconProps } from './CalendarIcon'

export default {
  title: 'atoms/Icon-Calendar',
  components: CalendarIcon,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story<CalendarIconProps> = (args) => <CalendarIcon {...args} />

export const Sample = Template.bind({})
Sample.args = { id: 1, size: 50 }
