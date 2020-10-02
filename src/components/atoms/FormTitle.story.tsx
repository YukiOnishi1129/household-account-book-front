import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import FormTitle, { Props as FormTitlProps } from './FormTitle'

export default {
  title: 'atoms/Title',
  components: FormTitle,
} as Meta

const Template: Story<FormTitlProps> = (args) => <FormTitle {...args} />

export const Calendar = Template.bind({})
Calendar.args = { title: 'カレンダー', space: 'sm' }

export const Graph = Template.bind({})
Graph.args = { title: 'グラフ', space: 'sm' }
