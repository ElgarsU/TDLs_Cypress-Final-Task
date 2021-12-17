/// <reference types="Cypress" />
import { BasePage } from "../BasePage";
const CONFIRM_NEW_USER_FORM = ".Login > .row > .col-xs-12 > h1";

export class LoginPage extends BasePage {
  static goToNewUserForm() {
    cy.visit("/registration?returnUrl=%2f");
    cy.get(CONFIRM_NEW_USER_FORM).should("have.text", "Registration");
  }
}
