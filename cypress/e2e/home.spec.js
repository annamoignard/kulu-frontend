describe("Find Home Page", () => {
  it("should have a url /Home", () => {
    cy.visit("/Home");
    cy.url().should("include", "/Home");
  });
});
