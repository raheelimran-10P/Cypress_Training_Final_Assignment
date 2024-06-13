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

});
