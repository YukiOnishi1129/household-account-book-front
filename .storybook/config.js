import { configure, addDecorator, addParameters } from '@storybook/react'
import { setDefaults, withInfo } from '@storybook/addon-info' // propsの型情報をstorybook上で確認できる
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import requireContext from 'require-context.macro'

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

// グローバルデフォルト設定
setDefaults({
  inline: true,
  header: false,
})

const req = requireContext('../src/components', true, /\.stories\.tsx$/)
configure(req, module)
