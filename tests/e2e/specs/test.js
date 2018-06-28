// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/starry/login#/login')
    cy.contains('button', '登  录')
  })
})
