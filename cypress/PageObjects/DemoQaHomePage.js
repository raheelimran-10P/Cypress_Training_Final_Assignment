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

    webTablesMenu = "//span[contains(text(), 'Web Tables')]"; // XPath locator
    addButton = "//button[contains(text(), 'Add')]"; // XPath locator for Add button
    firstNameField = "#firstName"; // ID locator for First Name field in form
    lastNameField = "#lastName"; // ID locator for Last Name field in form
    emaiField = "#userEmail" // ID locator for Last Name field in form
    ageField = "#age"; // ID locator for Age field in form
    salaryField = "#salary"; // ID locator for Salary field in form
    departmentField = "#department"; // ID locator for Department field in form
    submitButtonwebtable = "#submit"; // ID locator for Submit button in form
    tableRows = ".rt-tbody .rt-tr-group"; // CSS locator for table rows

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

    

    goToWebTableTab() {
        cy.xpath(this.webTablesMenu).click();
    }

    clickAddButton() {
        cy.xpath(this.addButton).click();
    }

    enterFirstName(firstName) {
        cy.get(this.firstNameField).type(firstName);
    }

    enterLastName(lastName) {
        cy.get(this.lastNameField).type(lastName);
    }

    enterEmail(email) {
        cy.get(this.emaiField).type(email);
    }

    enterAge(age) {
        cy.get(this.ageField).type(age);
    }

    enterSalary(salary) {
        cy.get(this.salaryField).type(salary);
    }

    enterDepartment(department) {
        cy.get(this.departmentField).type(department);
    }

    clickSubmitWebTable() {
        cy.get(this.submitButton).click();
    }

    getTableRows() {
        return cy.get(this.tableRows);
    }

    getLastTableRow() {
        return cy.get(this.tableRows).last();
    }

}

export const demoQaHomePage = new DemoQaHomePage()