/// <reference types="Cypress" />
import { BasePage } from "../BasePage";
const CONFIRM_NEW_USER_FORM = ".Login > .row > .col-xs-12 > h1";
const LOGIN_EMAIL_FIELD = "#Login_EmailAddress";
const LOGIN_PASSWORD_FIELD = "#Login_Password";
const LOGIN_BUTTON = "#LoginButton";

export class LoginPage extends BasePage {
  static goToNewUserForm() {
    cy.visit("/registration?returnUrl=%2f");
    cy.get(CONFIRM_NEW_USER_FORM).should("have.text", "Registration");
  }

  static logInWithUser(user = "registered_user") {
      cy.fixture("userData").then((fixture) => {
          this.type(LOGIN_EMAIL_FIELD, fixture[user].email);
          this.type(LOGIN_PASSWORD_FIELD, fixture[user].password);
      });
      this.click(LOGIN_BUTTON);
  }
}
