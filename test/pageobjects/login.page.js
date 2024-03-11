const { $ } = require("@wdio/globals");
const { waitUntilPageLoads } = require("../utils/waiters");

class LoginPage {
  get inputUserEmail() {
    return $("#user");
  }

  get inputPassword() {
    return $("#password");
  }

  get passwordErrorMsg() {
    return $("[data-testid='form-error']");
  }

  get btnLogin() {
    return $("#login");
  }

  get btnLoginSubmit() {
    return $("#login-submit");
  }

  async login(email, password) {
    await this.inputUserEmail.setValue(email);
    await this.btnLogin.waitForDisplayed();
    await this.btnLogin.click();
    browser.pause(5000);
    await waitUntilPageLoads();
    browser.pause(5000);
    await this.inputPassword.waitForDisplayed();
    browser.pause(5000);
    await this.inputPassword.setValue(password);
    await this.btnLoginSubmit.click();
    browser.pause(5000);
  }

  open() {
    return browser.url(`https://trello.com/login`);
  }
}

module.exports = new LoginPage();
