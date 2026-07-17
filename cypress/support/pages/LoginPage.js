class LoginPage {
  constructor() {
    this.url = '/';
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '.error-message-container';
    this.inventoryUrl = '/inventory.html';
  }

  visit() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).clear().type(password);
    return this;
  }

  submit() {
    cy.get(this.loginButton).click();
    return this;
  }

  login(username, password) {
    this.visit();
    this.typeUsername(username);
    this.typePassword(password);
    this.submit();
    return this;
  }

  assertSuccess() {
    cy.url().should('include', this.inventoryUrl);
    return this;
  }

  assertErrorMessage() {
    cy.get(this.errorMessage).should('be.visible');
    return this;
  }
}

export default new LoginPage();
