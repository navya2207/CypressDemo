
class homePage {
    welcomeNOP = 'div.topic-block-title h2'
    searchinput = 'input[id="small-searchterms"]'
    searchsubmit = 'button[type="submit"]'
    searchPage = 'div.page-title h1'
    successMessage = 'p.content'
    addtocart = 'button.button-2.product-box-add-to-cart-button'
    shoppingcart = 'span.cart-label'
    visit(displayedText)
    {
        cy.visit('/')
        cy.iframe().find(this.welcomeNOP).should('have.text',displayedText)
       
    }    
    
    productAddToCart(displayedText) {
        cy.iframe().find(this.searchinput).type(displayedText)
        cy.iframe().find(this.searchsubmit).click().wait(3000)
        cy.iframe().find(this.searchPage).should('have.text','Search')
        cy.iframe().find(this.addtocart).first().click({force: true})
        cy.focused().click({ force: true })
        cy.iframe().find(this.successMessage).should('be.visible')
        
    }
    getShoppingCart(){
        cy.iframe().find(this.shoppingcart).click({force: true}).wait(3000);
    } 
    
}
export default homePage  

