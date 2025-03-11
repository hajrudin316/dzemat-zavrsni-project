describe('dzemat menagament', () => {
  it('QV 1 Verify that a user can successfully log in', () => {
    cy.visit('https://dzematmgmt-dev.uradinesto.ba/login')
    cy.get('#usernameOrEmail').type('admin')
    cy.get('#password').type('admin')
    cy.get(':nth-child(3) > .MuiButtonBase-root').click()
    cy.get('.logo-img').should('be.visible')
  })
  it('', () => {
   
  })
})