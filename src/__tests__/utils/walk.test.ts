import * as walkModule from '../../utils/walk'

describe('walkFast関数のモック化テスト', () => {
  it('モックかできているか', () => {
    // spyOnすることによって、該当関数の型がspyInplementationに変化します。
    // mockReturnValueOnceによって自由にモック化できます。
    // jest.spyOnだけでは、実際の関数（モック化されていない関数）が実行されるので注意
    // spyOn(モジュール変数, '関数名')
    const walkSpy = jest
      .spyOn(walkModule, 'walkFast')
      .mockReturnValueOnce('walk slow')

    expect(walkModule.walkFast()).toBe('walk slow')
    // モック化できているかを確認(toHaveBeenCalled)
    expect(walkSpy).toHaveBeenCalled()
  })
})
