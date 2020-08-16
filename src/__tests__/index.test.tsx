import * as React from 'react'
import { mount } from 'enzyme'
import App from '../pages/index'

describe('indexのテスト', () => {
  it('テスト', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('h1').text()).toBe('Home')
  })
})
