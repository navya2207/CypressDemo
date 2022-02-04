/// <reference types = "Cypress"/>
import data from '../../fixtures/data'
import homePage from '../pageObjects/homePage'
import shoppingcartPage from '../pageObjects/shoppingcartPage'
import shippingPage from '../pageObjects/shippingPage'
import paymentPage from '../pageObjects/paymentPage'
import confirmOrderPage from '../pageObjects/confirmorderPage'
const home = new homePage()
const cart = new shoppingcartPage()
const address = new shippingPage()
const payment = new paymentPage()
const confirm = new confirmOrderPage()


describe ('Place Order in Demo Site', ()=>{
    before(function () {
        
        cy.fixture("data.json").then(function (data) {
            this.data = data;
        })
    })

    it('Placing Order',()=>{
        //Loading Demo site, searching for a product and adding it to Cart
        
            home.visit(data.homeTitle)        
            home.productAddToCart(data.productName)
            home.getShoppingCart()

        //Checking out as a Guest from Shopping cart
        
            cart.cartCheckout(data.cartTitle,data.productName)
            cart.getCheckoutAsGuest(data.checkoutTitle)
        
        //Filling in Shipping details and proceesing
        
            address.fillDetails(data.userFirstname,data.userLastname,data.userPhoneNumber)
            address.fillAddress(data.userCountry,data.userCity,data.userAddress,data.userPostcode)
            address.getBillingSave()
        //Continuing from the Payment page as a Can on Delivery Order
        
            payment.savePayment()
        //Confirming and Placing the Order
       
            confirm.getConfirmOrder()

    })
})