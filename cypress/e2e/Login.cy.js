/**
 * Responsável pela autenticação do usuário.
 * Implementa o fluxo de login e validação das credenciais.
 */
import { faker } from '@faker-js/faker';

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
      cy.login('standard_user', 'secret_sauce');
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('have.text', 'Products');
    });

    it(`Login com username inválido - ${tela.dispositivo}`, () => {
      cy.get('#user-name').type(faker.internet.userName());
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it(`Login com password inválido - ${tela.dispositivo}`, () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type(faker.internet.password());
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it(`Login com ambos os campos vazios - ${tela.dispositivo}`, () => {
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('be.visible').and('contain', 'Epic sadface: Username is required');
    });

    it(`Login com username vazio - ${tela.dispositivo}`, () => {
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('be.visible').and('contain', 'Epic sadface: Username is required');
    });

    it(`Login com password vazio - ${tela.dispositivo}`, () => {
      cy.get('#user-name').type('standard_user');
      cy.get('#login-button').click();
      cy.get('.error-message-container').should('be.visible').and('contain', 'Epic sadface: Password is required');
    });
  })
})