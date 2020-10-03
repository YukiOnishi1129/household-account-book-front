import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ColorRadioButton, {
  Props as ColorRadioButtonProps,
} from './ColorRadioButton'

export default {
  title: 'atoms/Button-Color-Radio',
  components: ColorRadioButton,
} as Meta

const Template: Story<ColorRadioButtonProps> = (args) => (
  <ColorRadioButton {...args} />
)

export const First = Template.bind({})
First.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 1,
  currentValue: 1,
}
export const Second = Template.bind({})
Second.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 2,
  currentValue: 1,
}
export const Third = Template.bind({})
Third.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 3,
  currentValue: 1,
}
export const Forth = Template.bind({})
Forth.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 4,
  currentValue: 1,
}
export const Fifth = Template.bind({})
Fifth.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 5,
  currentValue: 1,
}
export const Sixth = Template.bind({})
Sixth.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 6,
  currentValue: 1,
}
export const Seventh = Template.bind({})
Seventh.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 7,
  currentValue: 1,
}
export const Eighth = Template.bind({})
Eighth.args = {
  categories: [{ id: 1, category_name: '', color_type: 1 }],
  value: 8,
  currentValue: 1,
}
