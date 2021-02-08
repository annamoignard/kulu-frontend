describe("Should goto Login page", () => {
  it("should have a url /Login", () => {
    cy.visit("/Login")
    cy.url().should("include", "/Login")
  })
  
  it(" login should have a submit", () => {
    cy.contains('input[type=submit]', 'Submit').click()
    })
})
