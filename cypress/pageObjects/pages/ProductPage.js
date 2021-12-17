/// <reference types="Cypress" />
import { BasePage } from "../BasePage";
const ADD_TO_BAG_BUTTON = ".addToBagInner";
const PRODUCT_PROPERTY_BUTTON = "#ancLink";
const PRODUCT_NAME = "#lblProductName";
const CART = "#bagQuantityContainer";
const CART_ITEM_NAME = ".BaskName";
const CHECKOUT_BUTTON = "#aCheckout";

export class ProductPage extends BasePage {
  static verifyProductPage() {
    cy.get(ADD_TO_BAG_BUTTON).should("have.text", "Add to bag");
  }

  static addItemToCart() {
    cy.get(PRODUCT_PROPERTY_BUTTON).click();
    cy.get(ADD_TO_BAG_BUTTON).click();
    cy.get(PRODUCT_NAME).then((element) => {
      cy.wrap(element.text()).as("inCartItem");
    });
  }

  static verifyItemAdded() {
    cy.get(CART).trigger("mouseover");
    cy.get("@inCartItem").then((inCartItem) => {
      cy.get(CART_ITEM_NAME).should("contain.text", inCartItem);
    });
  }

  static goToCheckout() {
    cy.get(CART).trigger("mouseover");
    cy.get(CHECKOUT_BUTTON).click();
  }
}
