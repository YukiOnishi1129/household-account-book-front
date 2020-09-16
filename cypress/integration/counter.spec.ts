describe('カウンターアプリのテスト', function () {
  beforeEach(() => {
    // cy:visit 指定したURLを開くコマンド
    // cypress.jsonで指定したbaseURLを元にアクセス
    // cy.visit('/counter')
  })
  // it('+ボタンを押すとカウンターの値に1プラスされる', () => {
  //   // cy.get()でDOM elementsを指定
  //   // .clickでDOM elementをクリックする動作を追加できる
  //   // shoud アサーションを作成することができる
  //   cy.get('.increment').click().get('.counter').should('have.text', '1')
  // })

  // it('-ボタンを押すとカウンターの値が1マイナスされる', () => {
  //   cy.get('.decrement').click().get('.counter').should('have.text', '-1')
  // })

  // it('+ボタンを押した後、リセットボタンを押すとカウントが0に戻る', () => {
  //   cy.get('.increment')
  //     .click()
  //     .get('.reset')
  //     .click()
  //     .get('.counter')
  //     .should('have.text', '0')
  // })
})
