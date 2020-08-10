import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Example from '../example'

storiesOf('Components', module).add('Example', () => (
  <Example
    text={text('テキスト', 'ああああ')}
    flag={boolean('テキスト表示', true)}
    action={action('ぽちっとな')}
  />
))
