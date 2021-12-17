/// <reference types="Cypress" />
import { CreateUserPage } from "../../pageObjects/pages/CreateUserPage";
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { HomePage } from "../../pageObjects/pages/HomePage";

describe("Testing user creation and login flow.", () => {
  it("Creating a new user.", () => {
    HomePage.goToLoginPage();
    //LoginPage.goToNewUserForm();
    //CreateUserPage.enterUserData();
    //HomePage.verifyLogin();
  });

  it.skip("Logging in with a registered user", () => {
    HomePage.goToLoginPage();
    LoginPage.logInWithUser();
    HomePage.verifyLogin();
  });
});
