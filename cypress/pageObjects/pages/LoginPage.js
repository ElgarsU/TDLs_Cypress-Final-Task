/// <reference types="Cypress" />
import { BasePage } from "../BasePage";
const CONTINUE_SECURELY_BUTTON = ".newCustomer .ImgButWrap";
const CONFIRM_NEW_USER_FORM = ".Login .row .col-xs-12";

export class LoginPage extends BasePage {
  static goToNewUserForm() {
    cy.get(CONTINUE_SECURELY_BUTTON).click();
    cy.get(CONFIRM_NEW_USER_FORM).should("have.text", "Registration");
  }
}
