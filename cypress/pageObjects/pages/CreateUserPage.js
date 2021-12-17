/// <reference types="Cypress" />
import { BasePage } from "../BasePage";
const FIRST_NAME_INPUT = "#Registration_FirstName";
const LAST_NAME_INPUT = "#Registration_LastName";
const EMAIL_INPUT = "#Registration_EmailAddress";
const PASSWORD_INPUT = "#txtPassword";
const CONFIRM_PASSWORD_INPUT = "#Registration_ConfirmPassword";
const REGISTER_BUTTON = "#RegistrationSubmit";

export class CreateUserPage extends BasePage {
  static enterUserData(user = "new_user1") {
    cy.fixture("userData").then((fixture) => {
      this.type(FIRST_NAME_INPUT, fixture[user].first_name);
      this.type(LAST_NAME_INPUT, fixture[user].last_name);
      this.type(EMAIL_INPUT, fixture[user].email);
      this.type(PASSWORD_INPUT, fixture[user].password);
      this.type(CONFIRM_PASSWORD_INPUT, fixture[user].password);
    });
    this.click(REGISTER_BUTTON);
  }
}
