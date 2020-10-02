import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import InputForm, { Props as InputFormProps } from './InputForm'

export default {
  title: 'atoms/Form-Input',
  components: InputForm,
} as Meta

const Template: Story<InputFormProps> = (args) => <InputForm {...args} />

export const Text = Template.bind({})
Text.args = {
  type: 'text',
  comment: '入力してください',
  value: '',
  errMsg: '',
}
export const Email = Template.bind({})
Email.args = {
  type: 'email',
  comment: 'メールアドレスを入力してください。',
  value: '',
  errMsg: '',
}
export const Password = Template.bind({})
Password.args = {
  type: 'password',
  comment: 'パスワードを入力してください。',
  value: '',
  length: 20,
  errMsg: '',
}
