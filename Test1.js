describe('Login into Admin Settings', function () {

  beforeEach(() => {
    cy.loginAsAdmin();
  });

  it('should navigate to Expenses module', function () {
    cy.get('#quick-search-input').type('Expenses');
    cy.contains('.ah-quick-search-parent-title', 'Expenses').click();
  });

  it('should check visibility of a specific element', function () {
    cy.get('#quick-search-input').should('be.visible');
  });

});
