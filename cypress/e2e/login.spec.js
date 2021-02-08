describe("Should goto Login page", () => {
  it("should have a url /Login", () => {
    cy.visit("/Login");
    cy.url().should("include", "/Login");
  });

  it(" login should have a submit", () => {
    cy.contains("input[type=submit]", "Submit").click();
  });

  it(" login should have a submit", () => {
    cy.contains("input[type=submit]", "Submit").click();
  });

  it("renders email and password inputs", () => {
    cy.visit("/login");
    cy.get("#email").should("be.visible");
  });

  it("renders email and password inputs", () => {
    cy.visit("/login");
    cy.findByLabelText(/email/i).should("be.visible");
  });
});
