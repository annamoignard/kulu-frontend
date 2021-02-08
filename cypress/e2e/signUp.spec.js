import { userBuilder } from "../support/generate";

describe("when signing up user", () => {
  it("should be redirected to /login have a JWT in local storage", () => {
    const user = userBuilder();
    cy.visit("/home");
    cy.findByText(/Sign Up/i).click();
    cy.findByLabelText(/username/).type(user.email);
    cy.findByLabelText(/email/).type(user.email);
    cy.findByLabelText(/password/).type(user.password);
    cy.findByText(/Submit/).click();
    cy.url().should("eq", "http://localhost:8080/schedule");
    cy.window().its("localStorage.token").should("be.a", "string");
  });
});