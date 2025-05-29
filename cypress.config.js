const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'Cypress/e2e/Test1.cy.js'
  },
});



// Cypress.Commands.add('loginAsAdmin', () => {
//   cy.visit('/login');
//   cy.get('#username').type('admin');
//   cy.get('#password]').type('Master@123456');
//   cy.get('.ah-btn ah-login-btn').click();
// });








