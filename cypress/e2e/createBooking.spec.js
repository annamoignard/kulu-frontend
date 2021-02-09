describe("when clicking on login from the homepage user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.findByText(/Login/).click();
  });

  it("should go to the login page", () => {
    cy.url().should("include", "/login");
  });

  it("should see email and password inputs", () => {
    cy.findByLabelText(/email/i).should("exist");
    cy.findByLabelText(/password/i).should("exist");
  });
});
describe("Go to new-booking page", () => {
  it("should have a url /new-booking", () => {
    cy.visit("/new-booking");
    cy.url().should("include", "/new-booking");
  });

  it("form should have a submit", () => {
    cy.contains("input[type=submit]", "Submit").click();
  });
});
