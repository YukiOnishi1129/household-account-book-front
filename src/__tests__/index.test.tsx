import * as React from 'react'
import { shallow } from 'enzyme'
import App from '../pages/index'

describe('indexのテスト', () => {
  it('テスト', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toBe('Home')
  })
})
