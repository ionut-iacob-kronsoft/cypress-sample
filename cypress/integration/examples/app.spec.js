describe('App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('Loads the Image Generator Page', () => {
        cy.get('[data-cy=title]');
        cy.get('button').contains('Generate');
    })

})