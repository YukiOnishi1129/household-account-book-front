import React from 'react'
import { storiesOf } from '@storybook/react'
import FormTitle from './FormTitle'
import { text } from '@storybook/addon-knobs'

storiesOf('Atomes', module).add('FormTitle', () => (
  <FormTitle
    title={text('タイトル表示', 'カレンダー')}
    space={text('サイズ', 'sm')}
  />
))
