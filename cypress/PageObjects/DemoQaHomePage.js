/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

export class DemoQaHomePage {

    element_text = "//h5[contains(text(), 'Elements')]"; // XPath locator
    textbox_text = "//span[contains(text(), 'Text Box')]";
    fullname_textfield = "#userName"
    email = "#userEmail"; // ID locator
    currentAddress = "#currentAddress"; // ID locator
    permanentAddress = "#permanentAddress"; // ID locator
    submitButton = "#submit"; // ID locator

    goToElementPage(){
        cy.xpath(this.element_text).click()
    }

    goToTextBoxTab(){
        cy.xpath(this.textbox_text).click()
    }

    setFulltName(fullname) {
        cy.get(this.fullname_textfield).type(fullname);
    }

    setEmail(email) {
        cy.get(this.email).type(email);
    }

    setCurrentAddress(address) {
        cy.get(this.currentAddress).type(address);
    }

    setPermanentAddress(address) {
        cy.get(this.permanentAddress).type(address);
    }

    clickSubmit() {
        cy.get(this.submitButton).click();
    }
    
}

export const demoQaHomePage = new DemoQaHomePage()