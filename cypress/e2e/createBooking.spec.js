describe("logs in", () => {
  it("should have a url /new-booking", () => {
    cy.visit("/new-booking");
    cy.url().should("include", "/new-booking");
  });

  it("form should have a email", () => {
    cy.contains("input[type=email]", "email");
  });

  it("form should have a password", () => {
    cy.contains("input[type=password]", "password");
  });

  it("form should have a submit", () => {
    cy.contains("input[type=submit]", "Submit").click();
  });
  
  it("Login as student4", () => {
    cy.get("input[type=email]".type('student4@test.com'))
    cy.get("input[type=password]".type('pass123'))
    cy.get("input[type=submit]", "Submit").click();
});

});
