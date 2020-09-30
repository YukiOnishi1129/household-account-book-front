import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import CalendarIcon, { Props as CalendarIconProps } from './CalendarIcon'

export default {
  title: 'atoms/CalendarIcon',
  components: CalendarIcon,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta

const Template: Story<CalendarIconProps> = (args) => <CalendarIcon {...args} />

export const SampleCalendarIcon = Template.bind({})
SampleCalendarIcon.args = { id: 1, size: 50 }
