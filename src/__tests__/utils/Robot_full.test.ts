import { Robot } from '../../utils/Robot'

// jest.mock()によって、クラス全体をモック化できる
// jest.mock()はdescribeなどで囲むとエラーになる
jest.mock('../../utils/Robot') //pathを指定
const RobotMock = Robot as jest.Mock //クラスを型変換してモック変数に代入

describe('Robotのテスト', () => {
  it('クラス丸ごとモックになっているか？', () => {
    // mockImplementationOnceで実装したいクラスを設定する
    RobotMock.mockImplementationOnce(() => {
      return {
        name: 'R2-D2',
        hello: (): string => {
          return 'piro piro'
        },
      }
    })

    const robot = new Robot()
    expect(RobotMock).toHaveBeenCalled()
    expect(robot.name).toBe('R2-D2')
    expect(robot.hello()).toBe('piro piro')
  })
})
