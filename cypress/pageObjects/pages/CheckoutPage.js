/// <reference types="Cypress" />
import { BasePage } from "../BasePage";

const CHECKOUT_NAME = "#NewAddressSelection_Address_FirstName";
const CHECKOUT_SURNAME = "#NewAddressSelection_Address_Surname";
const CHECKOUT_ADDRESS = "#NewAddressSelection_Address_Line1";
const MANUAL_ADDRESS_INPUT = ".manuallyAddAddress";
const CHECKOUT_CITY = "#NewAddressSelection_Address_Town";
const CHECKOUT_ZIP = "#NewAddressSelection_Address_Postcode";
const CHECKOUT_PHONE = "#TelephoneNumber";
const CHECKOUT_BUTTON =
  ".ProgressButContain > .NewAddressContainBut > .ContinueOn";
const CONTINUE_DELIVERY_BUTTON =
  ".ProgressButContain > .DeliveryContinueButton > .ContinueOn";
const CHOOSE_CARD_BUTTON = "#NewCardPaymentForm";
const CARD_SUBMIT_BUTTON = "#cardSubmit";
const CARD_ERROR_MESSAGE = "#cardDetailsIncompleteError";

export class CheckoutPage extends BasePage {
  static inputUserData(user = "guest_user") {
    cy.get(MANUAL_ADDRESS_INPUT).first().click();
    cy.fixture("userData").then((fixture) => {
      this.type(CHECKOUT_NAME, fixture[user].first_name);
      this.type(CHECKOUT_SURNAME, fixture[user].last_name);
      this.type(CHECKOUT_ADDRESS, fixture[user].address);
      this.type(CHECKOUT_CITY, fixture[user].city);
      this.type(CHECKOUT_ZIP, fixture[user].zip);
      this.type(CHECKOUT_PHONE, fixture[user].phone_number);
    });
    cy.get(CHECKOUT_BUTTON).click();
  }

  static verifyDataInput() {
    cy.get(CONTINUE_DELIVERY_BUTTON).click();
  }

  static chooseCardPayment() {
    cy.get(CHOOSE_CARD_BUTTON).click();
    cy.get(CARD_SUBMIT_BUTTON).click();
  }

  static verifyErrorMessage() {
    cy.get(CARD_ERROR_MESSAGE).should(
      "have.text",
      "Please complete the card details to continue."
    );
  }
}
