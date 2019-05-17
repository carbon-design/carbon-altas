// https://docs.cypress.io/api/introduction/api.html

describe("Visits Login Page", () => {
  it("Visits the login page url", () => {
    cy.viewport("iphone-6+");
    cy.visit("/starry/login#/login");
    cy.contains("button.loginBtn", "登  录");
    cy.get(".ipt-wrap.user input").type("admin");
    cy.get(".ipt-wrap.pswd input").type("123");
    cy.get("button.loginBtn").click();
    cy.contains(".percent-title h1", "白条总额度 90,000");
  });
});
