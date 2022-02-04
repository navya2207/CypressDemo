class shoppingcartPage{
    cartTitle = 'div.page-title h1'
    productInCart = 'a.product-name'
    termsofservice = '#termsofservice'
    checkout = 'button[id="checkout"]'
    checkoutAsGuest = 'button.button-1.checkout-as-guest-button'

    cartCheckout(displayedText,productName){
        cy.iframe().find(this.cartTitle).should('have.text',displayedText)
        cy.iframe().find(this.productInCart).should('have.text',productName)
        cy.iframe().find(this.termsofservice,{ timeout: 10000 }).check();
        cy.iframe().find(this.checkout).click().wait(2000);
        
    }
    
    getCheckoutAsGuest(displayedText) {        
        cy.iframe().find(this.cartTitle).should('have.text',displayedText)
        cy.iframe().find(this.checkoutAsGuest).click().wait(2000);
    }

}
export default shoppingcartPage