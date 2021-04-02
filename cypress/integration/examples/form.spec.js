import { CATEGORY_LIST, FILTERS } from '../../../src/const';

describe('Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('Loads the form', () => {
        cy.get('button').contains('Generate');
    })

    describe('Form validation', () => {

        it('should have 3 fields', () => {
            cy.get('[data-cy=label-input]');
            cy.get('[data-cy=category-select]');
            cy.get('[data-cy=filter-select]');
        })

        describe(`should have 'label' field validations`, () => {

            beforeEach(() => {
                cy.get('[data-cy=label-input]').as('input');
            })
            
            it('should have initial empty value', () => {
                cy.get('@input').should('have.value', '');
            })

            it('should be required', () => {
                cy.get('@input').focus();
                cy.get('@input').blur();
                cy.get('[data-cy="label-input-error"]').should('exist').and('contain', 'Required');
            })

            it('should have minimum length', () => {
                cy.get('@input').type('ABC');
                cy.get('@input').blur();
                cy.get('[data-cy="label-input-error"]').should('exist').and('contain', '5 characters');
                cy.get('@input').clear();
                cy.get('@input').type('ABCDE');
                cy.get('[data-cy="label-input-error"]').should('not.exist');
            })

        })

        const selectFields = {
            'category': Object.values(CATEGORY_LIST),
            'filter': Object.values(FILTERS)
        }
        Object.entries(selectFields).forEach(([key, values])=> {

            describe(`should have '${key}' field validations`, () => {

                beforeEach(() => {
                    cy.get(`[data-cy=${key}-select]`).as('select');
                })
                
                it('should have initial empty value', () => {
                    cy.get('@select').should('have.value', null);
                })
    
                it('should be required', () => {
                    cy.get('@select').focus();
                    cy.get('@select').blur();
                    cy.get(`[data-cy="${key}-select-error"]`).should('exist').and('contain', 'Required');
                })
    
                it('should select an option', () => {
                    const firstValue = values[0];
                    cy.get('@select').select(firstValue);
                    cy.get('@select').blur();
                    cy.get(`[data-cy="${key}-select-error"]`).should('not.exist');
                    cy.get('@select').should('have.value', firstValue);
                })
    
                it('should have all options', () => {
                    return cy.get('@select').children('option').then(options => {
                        const actual = [...options].map(o => o.value).filter(o => o);
                        // expect(actual).to.deep.eq(values);
                        assert.deepEqual(actual, values);
                    });
                })
    
            })

        });

    })

    it('Resets the form', () => {
        cy.get('[data-cy=label-input]').type('Title');
        cy.get('[data-cy=category-select]').select(CATEGORY_LIST.ANIMALS);
        cy.get('[data-cy=filter-select]').select(FILTERS.NONE);
        cy.get('button').contains('Reset').click();

        cy.get('[data-cy=label-input]').should('have.value', '');
        cy.get('[data-cy=category-select]').should('have.value', null);
        cy.get('[data-cy=filter-select]').should('have.value', null);
    })

    it('Submits the form', () => {
        cy.get('[data-cy=label-input]').type('Title');
        cy.get('[data-cy=category-select]').select(CATEGORY_LIST.ANIMALS);
        cy.get('[data-cy=filter-select]').select(FILTERS.NONE);
        cy.get('button').contains('Generate').click();
        cy.get('.App-image').should('exist');
    })

})