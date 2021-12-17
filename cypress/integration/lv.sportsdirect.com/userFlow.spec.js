/// <reference types="Cypress" />
import { CreateUserPage } from "../../pageObjects/pages/CreateUserPage";
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { HomePage } from "../../pageObjects/pages/HomePage";

describe("Testing user creation and login flow.", () => {
  it("Creating a new user.", () => {
    HomePage.goToLoginPage();
    LoginPage.goToNewUserForm();
    //For test evaluation and grading, use arguments new_user3 or new_user4
    //new_user1 and new_user2 were used for test development
    CreateUserPage.enterUserData("new_user2");
    //There isn't a unique message for new user registration
    //If successful, newly created user is logged in
    //Verifying test case is the same as a logged in user verify
    HomePage.verifyLoginStatus();
  });

  it("Logging in with a registered user", () => {
    HomePage.goToLoginPage();
    LoginPage.logInWithUser("registered_user");
    HomePage.verifyLoginStatus();
  });

  it.skip("Failing test case with incorrect login to showcase screenshots", ()=> {
    HomePage.goToLoginPage();
    LoginPage.logInWithUser("error_user");
    HomePage.verifyLoginStatus();
  })
});
