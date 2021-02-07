describe("create a new booking", () => {
  it("should have a url /new-booking", () => {
    cy.visit("/new-booking")
    cy.url().should("include", "/new-booking")
  })
})