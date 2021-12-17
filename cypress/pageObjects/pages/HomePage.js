/// <reference types="Cypress" />
import { BasePage } from "../BasePage";
const LOGIN_PAGE = ".SignInLink";
const LOGIN_PAGE_VERIFY = ".existingCustomer .contact-sec > h1";
const SIGNOUT_TEXT = ".SignOut .hidden-xs";

export class HomePage extends BasePage {
  static goToLoginPage() {
    cy.visit("/");
    cy.get(LOGIN_PAGE).click();
    cy.get(LOGIN_PAGE_VERIFY).should("have.text", "Already Registered?");
  }

  static verifyLoginStatus() {
    cy.get(SIGNOUT_TEXT).should("have.text", "Sign out");
  }
}
