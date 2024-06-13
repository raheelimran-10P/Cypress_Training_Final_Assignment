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
    checkboxMenu = "//span[contains(text(), 'Check Box')]"; // XPath locator
    homeToggle = "//span[contains(text(), 'Home')]/parent::label/preceding-sibling::button";
    documentsToggle = "//span[contains(text(), 'Documents')]/parent::label/preceding-sibling::button";
    officeToggle = "//span[contains(text(), 'Office')]/parent::label/preceding-sibling::button";
    publicCheckbox = "//span[contains(text(), 'Public')]/preceding-sibling::span[@class='rct-checkbox']"; // XPath locator for checkbox
    resultMessage = "#result"; // ID locator for result message

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

    goToCheckBoxTab(){
        cy.xpath(this.checkboxMenu).click()
    }

    expandHome() {
        cy.xpath(this.homeToggle).click();
    }

    expandDocuments() {
        cy.xpath(this.documentsToggle).click();
    }

    expandOffice() {
        cy.xpath(this.officeToggle).click();
    }

    checkPublic() {
        cy.xpath(this.publicCheckbox).click();
    }

    getResultMessage() {
        return cy.get(this.resultMessage);
    }

}

export const demoQaHomePage = new DemoQaHomePage()