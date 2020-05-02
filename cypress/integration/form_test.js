/* global cy */

describe('Testing form inputs', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000/order');
    });

    it('checks form', function () {
        cy.get('[data-cy="name"').type('waddup').should('have.value', 'waddup');
        cy.get('select').select('Small');
        cy.get('[type="checkbox"]').check().should('be.checked');
        cy.get('textarea').type('yo').should('have.value', 'yo');
        cy.get('[data-cy="Submit"]').click();
    })
})