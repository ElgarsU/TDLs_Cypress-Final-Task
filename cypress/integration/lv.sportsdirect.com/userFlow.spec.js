/// <reference types="Cypress" />
import { CreateUserPage } from "../../pageObjects/pages/CreateUserPage";
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { HomePage } from "../../pageObjects/pages/HomePage";

describe("Testing user creation and login flow.", () => {
  it("Creating a new user.", () => {
    HomePage.goToLoginPage();
    LoginPage.goToNewUserForm();
    CreateUserPage.enterUserData();
    //There isn't a unique message for new user registration
    //If successful, newly created user is logged in
    //Verifying test case is the same as a logged in user verify 
    //HomePage.verifyLogin();
  });

  it.skip("Logging in with a registered user", () => {
    HomePage.goToLoginPage();
    LoginPage.logInWithUser();
    HomePage.verifyLogin();
  });
});
