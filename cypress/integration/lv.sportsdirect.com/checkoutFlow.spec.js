import { HomePage } from "../../pageObjects/pages/HomePage";
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { ProductPage } from "../../pageObjects/pages/ProductPage";
import { CheckoutPage } from "../../pageObjects/pages/CheckoutPage";

describe("Testing product checkout flow.", () => {
  it("Adding an item to cart as registered user.", () => {
    HomePage.visitSportsDirect();
    HomePage.goToLoginPage();
    LoginPage.logInWithUser("registered_user");
    HomePage.verifyLoginStatus();
    HomePage.goToProductPage();
    ProductPage.verifyProductPage();
    ProductPage.addItemToCart();
    ProductPage.verifyItemAdded();
  });

  it("Checkout as a guest, request card details error message.", () => {
    HomePage.goToProductPage();
    ProductPage.verifyProductPage();
    ProductPage.addItemToCart();
    ProductPage.verifyItemAdded();
    ProductPage.goToCheckout();
    LoginPage.checkoutAsGuest();
    CheckoutPage.inputUserData("guest_user");
    CheckoutPage.verifyDataInput();
    CheckoutPage.chooseCardPayment();
    CheckoutPage.verifyErrorMessage();
  });
});
