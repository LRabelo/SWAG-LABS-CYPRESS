/**
 * Responsável pela autenticação do usuário.
 * Implementa o fluxo de login e validação das credenciais.
 */
import loginPage from '../support/pages/LoginPage';

const telas = [
  { dispositivo: 'Desktop', largura: 1280, altura: 720 },
  { dispositivo: 'Tablet', largura: 768, altura: 1024 },
  { dispositivo: 'Mobile', largura: 375, altura: 667 }
]

telas.forEach((tela) => {
  describe(`Testes de Login - ${tela.dispositivo}`, () => {

    beforeEach(() => {
      cy.viewport(tela.largura, tela.altura)
      cy.visit('/')
    })

    it(`Login com credenciais válidas - ${tela.dispositivo}`, () => {
      loginPage.login('standard_user', 'secret_sauce');
      loginPage.assertSuccess();
    });

    it(`Login com username inválido - ${tela.dispositivo}`, () => {
      loginPage.login('invalid_user', 'secret_sauce');
      loginPage.assertErrorMessage();
    });

    it(`Login com password inválido - ${tela.dispositivo}`, () => {
      loginPage.login('standard_user', 'wrong_password');
      loginPage.assertErrorMessage();
    });

    it(`Login com ambos os campos vazios - ${tela.dispositivo}`, () => {
      loginPage.submit();
      loginPage.assertErrorMessage();
    });

    it(`Login com username vazio - ${tela.dispositivo}`, () => {
      loginPage.typePassword('secret_sauce');
      loginPage.submit();
      loginPage.assertErrorMessage();
    });

    it(`Login com password vazio - ${tela.dispositivo}`, () => {
      loginPage.typeUsername('standard_user');
      loginPage.submit();
      loginPage.assertErrorMessage();
    });
  })
})
