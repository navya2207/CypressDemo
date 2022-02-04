class paymentPage{
    shippingMethod = '#shippingoption_0'
    shippingMethodSave = 'button[onclick="ShippingMethod.save()"]'
    paymentMethod = 'input[id="paymentmethod_0"]'
    PaymentMethodSave = 'button[onclick="PaymentMethod.save()"]'
    PaymentInfoSave = 'button[onclick="PaymentInfo.save()"]'

    savePayment(){
        //check shipping method selection and proceed
        cy.iframe().find(this.shippingMethod).should('be.checked')
        cy.iframe().find(this.shippingMethodSave).click();
        //check if money payment method is checked
        cy.iframe().find(this.paymentMethod).should('be.checked')
        cy.iframe().find(this.PaymentMethodSave).click();
        cy.iframe().find(this.PaymentInfoSave).click();
        
    }
         

}
export default paymentPage