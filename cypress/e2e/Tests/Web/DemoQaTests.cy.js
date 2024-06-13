import { demoQaHomePage } from "../../../PageObjects/DemoQaHomePage";
import webTestData from "../../../fixtures/WebTestData.json";
/// <reference types="cypress" />

describe('Assignment Test cases', { tags: ['@assignment', '@training'] }, () => {

  beforeEach(() => {
    cy.visit(webTestData.url);
  })

  it('Test Case - 01', {tags: '@task-01'}, () => {

    demoQaHomePage.goToElementPage();
    demoQaHomePage.goToTextBoxTab();
    demoQaHomePage.setFulltName(webTestData.fullname);
    demoQaHomePage.setEmail(webTestData.email);
    demoQaHomePage.setCurrentAddress(webTestData.current_address);
    demoQaHomePage.setPermanentAddress(webTestData.permanent_address);

    // Submit the form
    demoQaHomePage.clickSubmit();

    // Verify the output
    cy.get('#name').should('contain.text', webTestData.fullname);
    cy.get('#email').should('contain.text', webTestData.email);
    cy.get('.border > #currentAddress').should('contain.text', webTestData.current_address);
    cy.get('.border > #permanentAddress').should('contain.text', webTestData.permanent_address);

  });

  it('Test Case - 02',{tags: '@task-02'}, () => {

    demoQaHomePage.goToElementPage();
    demoQaHomePage.goToCheckBoxTab();

    // Expand Home > Documents > Office
    demoQaHomePage.expandHome();
    demoQaHomePage.expandDocuments();
    demoQaHomePage.expandOffice();

    // Click on checkbox Public
    demoQaHomePage.checkPublic();

    // Assert the message
    demoQaHomePage.getResultMessage().should('contain.text', 'You have selected :public');

  });

  it('Test Case - 03',{tags: '@task-03'}, () => {

    demoQaHomePage.goToElementPage();
    demoQaHomePage.goToWebTableTab();

    // Click on Add button
    demoQaHomePage.clickAddButton();

    // Fill in the form
    demoQaHomePage.enterFirstName(webTestData.first_name);
    demoQaHomePage.enterLastName(webTestData.last_name);
    demoQaHomePage.enterEmail(webTestData.email)
    demoQaHomePage.enterAge(webTestData.age);
    demoQaHomePage.enterSalary(webTestData.salary);
    demoQaHomePage.enterDepartment(webTestData.department);

    // Submit the form
    demoQaHomePage.clickSubmit();

    // Verify the details

    cy.xpath("//div[contains(text(), '"+webTestData.first_name+"')]").should('contain.text', 'muhammad');
    cy.xpath("//div[contains(text(), '"+webTestData.last_name+"')]").should('contain.text', 'raheel');
    cy.xpath("//div[contains(text(), '"+webTestData.email+"')]").should('contain.text', 'abc@gmail.com');
    cy.xpath("//div[contains(text(), '"+webTestData.age+"')]").should('contain.text', '30');
    cy.xpath("//div[contains(text(), '"+webTestData.salary+"')]").should('contain.text', '5000');
    cy.xpath("//div[contains(text(), '"+webTestData.department+"')]").should('contain.text', 'QA');

  });

});
