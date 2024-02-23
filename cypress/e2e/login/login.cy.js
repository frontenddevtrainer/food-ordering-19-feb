/// <reference types="cypress" />

describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");

    cy.intercept("POST", "http://localhost:3000/api/login", {
      statusCode: 200,
      body: {
        token: "jdkhadjkdhakhdkjada",
      },
    }).as("LoginRequest");
  });

  it("allows user to login", () => {
    cy.get("input#email").type("123@abc.com");
    cy.get("input#password").type("12345");

    cy.get("form").submit();

    cy.wait("@LoginRequest").its("request.body").should("deep.equal", {
      email: "123@abc.com",
      password: "12345",
    });
  });
});
