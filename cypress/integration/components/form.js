describe('Sample Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
  });

  it('should select multiple options in a dropdown', () => {
    cy.get('body').click(0, 0);
    cy.get('.multi-currency').click();
    cy.get('.MuiMenuItem-root:nth-child(2)').click();
    cy.get('.MuiMenuItem-root:nth-child(3)').click();
    cy.get('.MuiMenuItem-root:nth-child(4)').click();
    cy.get('.MuiMenuItem-root:nth-child(5)').click();
    cy.get('.MuiMenuItem-root:nth-child(5)').click();
    cy.get('.MuiMenuItem-root:nth-child(4)').click();
    cy.get('.MuiMenuItem-root:nth-child(3)').click();
    cy.get('.MuiMenuItem-root:nth-child(2)').click();
    cy.get('.MuiMenuItem-root:nth-child(1)').click();
    cy.get('body').click(0, 0);
  });

  it('should show edit input and dropdown elements and compare form value', () => {
    cy.get('#name').click();
    cy.get('#name').type('Scarlett johanson');

    cy.get('.multi-currency').click();
    cy.get('.MuiMenuItem-root:nth-child(1)').click();
    cy.get('.MuiMenuItem-root:nth-child(3)').click();
    cy.get('body').click(0, 0);

    cy.get('.currency').click();
    cy.get('.MuiMenuItem-root:nth-child(1)').click();
    cy.get('.MuiMenuItem-root:nth-child(3)').click();
    cy.get('body').click(0, 0);

    cy.get('.gender').click();
    cy.get('.MuiMenuItem-root:nth-child(1)').click();

    cy.get('#form-values').contains(
      JSON.stringify(
        {
          name: 'Scarlett johanson',
          multiCurrency: ['USD', 'BTC'],
          currency: 'BTC',
          gender: 'male',
        },
        null,
        2
      )
    );
  });
});
