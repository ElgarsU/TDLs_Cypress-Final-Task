import { HomePage } from "../../pageObjects/pages/HomePage";
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { ProductPage } from "../../pageObjects/pages/ProductPage";
import { CheckoutPage } from "../../pageObjects/pages/CheckoutPage"

describe("Testing product checkout flow.", () => {
  it("Adding an item to cart as registered user.", () => {
    HomePage.goToLoginPage();
    LoginPage.logInWithUser("registered_user");
    HomePage.verifyLoginStatus();
    //set up login cookies?
    HomePage.goToProductPage();
    ProductPage.verifyProductPage();
    ProductPage.addItemToCart();
    //ProductPage.verifyItemAdded();
  });

  it.skip("Checkout as a guest, request card details error message.", () => {
    ProductPage.goToProductPage();
    ProductPage.verifyProducPage();
    ProductPage.addItemToCart();
    ProductPage.verifyItemAdded();
    ProductPage.goToCheckout();
    LoginPage.continueAsGuest();
    CheckoutPage.inputUserData();
    CheckoutPage.verifyDataInput();
    CheckoutPage.chooseCardPayment();
    CheckoutPage.continueWithoutCardData();
    CheckoutPage.verifyErrorMessage();      
  });
});
