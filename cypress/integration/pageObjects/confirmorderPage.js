class confirmOrderPage{
    confirmOrder = 'button[onclick="ConfirmOrder.save()"]'
    thankyou = 'div.page-title h1'
    ordernumber = 'div.order-number strong'
    getConfirmOrder(){
        cy.iframe().find(this.confirmOrder).click();
        cy.iframe().find(this.thankyou)
        
        
    }
}
export default confirmOrderPage