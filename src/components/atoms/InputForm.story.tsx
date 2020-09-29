import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import InputForm, { Props as InputFormProps } from './InputForm'

export default {
  title: 'atoms/InputForm',
  components: InputForm,
} as Meta

const Template: Story<InputFormProps> = (args) => <InputForm {...args} />

export const TextInput = Template.bind({})
TextInput.args = {
  type: 'text',
  comment: '入力してください',
  value: '',
  errMsg: '',
}
export const EmailInput = Template.bind({})
EmailInput.args = {
  type: 'email',
  comment: 'メールアドレスを入力してください。',
  value: '',
  errMsg: '',
}
export const PasswordInput = Template.bind({})
PasswordInput.args = {
  type: 'password',
  comment: 'パスワードを入力してください。',
  value: '',
  length: 20,
  errMsg: '',
}
