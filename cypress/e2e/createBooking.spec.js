describe("create a booking", () => {
  it("should have a url /new-booking", () => {
    cy.visit
    cy.url().should("include", "/new-booking")
  })
})