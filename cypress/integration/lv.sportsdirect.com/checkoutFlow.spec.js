import { HomePage } from "../../pageObjects/pages/HomePage";
import { LoginPage } from "../../pageObjects/pages/LoginPage";
import { ProductsPage } from "../../pageObjects/pages/ProductsPage";
import { ItemPage } from "../../pageObjects/pages/ItemPage";
import { CheckoutPage } from "../../pageObjects/pages/CheckoutPage"

describe("Testing product checkout flow.", () => {
  it("Adding an item to cart as registered user.", () => {
    HomePage.goToLoginPage();
    LoginPage.loginWithUser();
    HomePage.verifyLogin();
    //set up login cookies?
    ProductsPage.goToProductsPage();
    ProductsPage.verifyItemAvailable();
    ItemPage.addItemToCart();
    ItemPage.verifyItemAdded();
  });

  it("Checkout as a guest, request card details error message.", () => {
    ProductsPage.goToProductsPage();
    ProductsPage.verifyItemAvailable();
    ItemPage.addItemToCart();
    ItemPage.verifyItemAdded();
    ItemPage.goToCheckout();
    LoginPage.continueAsGuest();
    CheckoutPage.inputUserData();
    CheckoutPage.verifyDataInput();
    CheckoutPage.chooseCardPayment();
    CheckoutPage.continueWithoutCardData();
    CheckoutPage.verifyErrorMessage();      
  });
});
