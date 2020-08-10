import React from 'react'
import SampleButton from './SampleButton'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

export default {
  title: 'SampleButton',
}

storiesOf('Button', module).add('showSampleButton', () => (
  <SampleButton label={text('テキスト', 'ああああ')} />
))
