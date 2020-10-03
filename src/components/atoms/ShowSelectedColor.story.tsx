import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ShowSelectedColor, {
  Props as ShowSelectedColorProps,
} from './ShowSelectedColor'

export default {
  title: 'atoms/Show-Color',
  components: ShowSelectedColor,
}

const Template: Story<ShowSelectedColorProps> = (args) => (
  <ShowSelectedColor {...args} />
)

export const None = Template.bind({})
None.args = {
  currentValue: 0,
  errMsg: '',
}
export const First = Template.bind({})
First.args = {
  currentValue: 1,
  errMsg: '',
}
export const Second = Template.bind({})
Second.args = {
  currentValue: 2,
  errMsg: '',
}
export const Third = Template.bind({})
Third.args = {
  currentValue: 3,
  errMsg: '',
}
export const Forth = Template.bind({})
Forth.args = {
  currentValue: 4,
  errMsg: '',
}
export const Fifth = Template.bind({})
Fifth.args = {
  currentValue: 5,
  errMsg: '',
}
export const Sixth = Template.bind({})
Sixth.args = {
  currentValue: 6,
  errMsg: '',
}
export const Seventh = Template.bind({})
Seventh.args = {
  currentValue: 7,
  errMsg: '',
}
export const Eighth = Template.bind({})
Eighth.args = {
  currentValue: 8,
  errMsg: '',
}
