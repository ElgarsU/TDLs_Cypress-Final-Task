/// <reference types="Cypress" />
import { BasePage } from "../BasePage";
const LOGIN_PAGE = ".SignInLink";
const LOGIN_PAGE_VERIFY = ".existingCustomer .contact-sec > h1";
const SIGNOUT_TEXT = ".SignOut .hidden-xs";
const CATEGORY_SELECTION = ".divFeatImg";
const PRODUCT_SELECTION = ".rtimg";
const TOP_MENU = "#topLinkMenu";

export class HomePage extends BasePage {
  static visitSportsDirect() {
    cy.visit("/");
  }

  static goToLoginPage() {
    cy.get(LOGIN_PAGE).click();
    cy.get(LOGIN_PAGE_VERIFY).should("have.text", "Already Registered?");
  }

  static verifyLoginStatus() {
    cy.get(TOP_MENU).trigger("mouseover");
    cy.get(SIGNOUT_TEXT).should("have.text", "Sign out");
  }

  static goToProductPage() {
    cy.visit("/mens/footwear");
    cy.get(CATEGORY_SELECTION).first().click();
    cy.get(PRODUCT_SELECTION).first().click();
  }
}
