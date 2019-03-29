Cypress.Commands.add('hideHubSpot', () => {
  cy.get('#hubspot-messages-iframe-container > iframe')
      .invoke('css', 'display', 'none')
      .should('have.css', 'display', 'none')
})

describe('55422353', function() {
  it('sets a css property', function() {
    cy.visit('index.html')
    cy.hideHubSpot()
  })
})
