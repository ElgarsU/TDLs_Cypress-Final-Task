/// <reference types="Cypress" />
import { BasePage } from "../BasePage";

const CREATE_USER_BUTTON =
  ".newCustomer > .innerBorder > .loginContainer > .NewCustWrap > .ImgButWrap > .dnnPrimaryAction";
const LOGIN_EMAIL_FIELD = "#Login_EmailAddress";
const CONTINUE_AS_GUEST =
  "#continue > .loginContainer > .NewCustWrap > .ImgButWrap > .dnnPrimaryAction";
const LOGIN_PASSWORD_FIELD = "#Login_Password";
const LOGIN_BUTTON = "#LoginButton";
const INCORRECT_LOGIN_DATA = ".field-validation-error";
const CONFIRM_NEW_USER_FORM = ".Login > .row > .col-xs-12 > h1";
const NEW_USER_EMAIL = "#Guest_EmailAddress";
const INCORRECT_GUEST_EMAIL = "#Guest_EmailAddress-error";

export class LoginPage extends BasePage {
  static createNewAccount() {
    cy.get(CREATE_USER_BUTTON).click();
    cy.get(CONFIRM_NEW_USER_FORM).should("have.text", "Registration");
  }

  static logInWithUser(user = "registered_user") {
    cy.fixture("userData").then((fixture) => {
      this.type(LOGIN_EMAIL_FIELD, fixture[user].email);
      this.type(LOGIN_PASSWORD_FIELD, fixture[user].password);
    });
    this.click(LOGIN_BUTTON);
    cy.get(INCORRECT_LOGIN_DATA).should("not.exist");
  }

  static checkoutAsGuest(user = "guest_user") {
    cy.fixture("userData").then((fixture) => {
      this.type(NEW_USER_EMAIL, fixture[user].email);
    });
    cy.get(CONTINUE_AS_GUEST).click();
    cy.get(INCORRECT_GUEST_EMAIL).should("not.exist");
  }
}
