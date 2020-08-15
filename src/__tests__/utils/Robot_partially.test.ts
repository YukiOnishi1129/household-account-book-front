import { Robot } from '../../utils/Robot'

// 一部だけモックにしたいので、jest.mock()はなし

describe('Robotのテスト', () => {
  it('クラスの一部だけモックになっているか', () => {
    // Robot.prototypeのhello関数をspyOnすることで、hello関数のモック化ができる
    const helloSpy = jest
      // spyOn()の第1引数は、クラス名.prototype
      .spyOn(Robot.prototype, 'hello')
      .mockReturnValue('piro piro')

    const robot = new Robot()
    expect(helloSpy).not.toHaveBeenCalled()

    expect(robot.name).toBe('C-3PO')
    expect(robot.hello()).toBe('piro piro')
    expect(helloSpy).toHaveBeenCalled()
  })
})
