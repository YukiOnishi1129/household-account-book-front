import React from 'react'
import { MyButton, MyButtonProps } from '../components/test/index'
import { mount } from 'enzyme'
import TestRenderer from 'react-test-renderer'

describe('MyButton', () => {
  it('ボタンテキストが正しく表示されているか確認', () => {
    const props: MyButtonProps = {
      txt: 'MyButtonTxt',
      handleClick: () => {},
    }
    // propsを受け取り mount テスト対象component生成
    const wrapper = mount(<MyButton {...props} />)
    // { txt }にpropsで受け取った値が表示されているか確認
    expect(wrapper.text()).toBe(props.txt)
  })

  it('clickイベントの確認', () => {
    const props: MyButtonProps = {
      txt: 'MyButtonTxt',
      handleClick: jest.fn,
    }
    // handleClickの監視
    const spyHandleClick = jest.spyOn(props, 'handleClick')
    // propsを受け取り mount テスト対象component生成
    const wrapper = mount(<MyButton {...props} />)
    // clickイベント実行
    wrapper.find('button').simulate('click')
    // spyHandleClickが実行されたか確認
    expect(spyHandleClick).toHaveBeenCalled()
  })

  it('<MyButton>のスナップショットテスト', () => {
    const props: MyButtonProps = {
      txt: 'MyButtonTxt',
      handleClick: jest.fn,
    }
    const tree = TestRenderer.create(<MyButton {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
