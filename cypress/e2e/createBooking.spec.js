describe("create a new booking", () => {
  it("should have a url /new-booking", () => {
    cy.visit("/new-booking")
    cy.url().should("include", "/new-booking")
  })

  it("allows inputs to have text", () => {
    cy.visit("/new-booking")
    cy.findAllByLabelText(/time/i).should("exist")
  })

})