import {url} from "../../../fixtures/ApiTestData.json";

describe('CRUD Operations on Users API', () => {
    const baseUrl = url;
    let userData;

    before(() => {
        cy.fixture('userData').then((data) => {
            userData = data;
        });
    });

    it('GET - Retrieve Users', () => {
        cy.request(baseUrl)
            .its('status')
            .should('equal', 200);
    });

    it('POST - Create User', () => {
        cy.request({
            method: 'POST',
            url: baseUrl,
            body: userData.newUser,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .its('status')
        .should('equal', 201);
    });

    it('PUT - Update User', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/1`,
            body: userData.updatedUser,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .its('status')
        .should('equal', 200);
    });

    it('DELETE - Delete User', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/1`
        })
        .its('status')
        .should('equal', 200);
    });
});
