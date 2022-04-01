describe('Sample Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form');
  });

  it('should select multiple options in a dropdown', () => {
    cy.get('body').click(0, 0);
    cy.get('.multi-currency').click();

    Array.from({ length: 4 }).forEach((_, i) => {
      cy.get(`.MuiMenuItem-root:nth-child(${i + 1})`).click();
    });

    cy.get('body').click(0, 0);
  });

  it('should edit input & dropdown elements and compare form values', () => {
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
