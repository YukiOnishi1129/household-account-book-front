import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import FormTitle, { Props as FormTitlProps } from './FormTitle'

export default {
  title: 'atoms/FormTitle',
  components: FormTitle,
} as Meta

const Template: Story<FormTitlProps> = (args) => <FormTitle {...args} />

export const CalendarTitle = Template.bind({})
CalendarTitle.args = { title: 'カレンダー', space: 'sm' }

export const GraphTitle = Template.bind({})
GraphTitle.args = { title: 'グラフ', space: 'sm' }
