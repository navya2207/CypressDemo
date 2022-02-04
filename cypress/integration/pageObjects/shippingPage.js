class shippingPage{
    checkoutTitle = 'div.page-title h1'
    firstname = 'input[id="BillingNewAddress_FirstName"]'
    lastname = 'input[id="BillingNewAddress_LastName"]'
    email = 'input[id="BillingNewAddress_Email"]'
    countryId = 'select#BillingNewAddress_CountryId'
    city = 'input[id="BillingNewAddress_City"]'
    address1 = 'input[id="BillingNewAddress_Address1"]'
    postcalCode = 'input[id="BillingNewAddress_ZipPostalCode"]'
    phoneNumber = 'input[id="BillingNewAddress_PhoneNumber"]'
    billingSave = 'button[onclick="Billing.save()"]'
    
    fillDetails(first,last,pnumber){
        
        cy.iframe().find(this.checkoutTitle).should('have.text','Checkout')
        cy.iframe().find(this.firstname).type(first);
        cy.iframe().find(this.lastname).type(last);    
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        cy.iframe().find(this.email).type(first+ id + "@gmail.com");
        cy.iframe().find(this.phoneNumber).type(pnumber);
        
    }
    
    fillAddress(cityname,address,postcode) {
        cy.iframe().find(this.countryId).select('India').should('have.value','133');
        cy.iframe().find(this.city).type(cityname);
        cy.iframe().find(this.address1).type(address);
        cy.iframe().find(this.postcalCode).type(postcode);
        
    }
    
    getPhoneNumber(value) {
        
    }
    
    getBillingSave() {
        cy.iframe().find(this.billingSave).click();
    }
    

}
export default shippingPage