describe("Create new Session", () => {
  it("should have a url /create-session", () => {
    cy.visit("/create-session");
    cy.url().should("include", "/create-session");
  });

describe("when clicking on timetable from homepage user", () => {
  beforeEach(() => {
    cy.visit("/create-session");
    cy.findByTestId(/login/).click();
  });

  it("should be able to type into email and password inputs", () => {
    const { email, password } = userBuilder()
    cy.findByLabelText(/email/i).type(email).should("contain.value", email)
    cy.findByLabelText(/password/i).type(password).should("contain.value", password)
  })

//   const sessionBuilder = build('Session', {
//     fields: {
//       name: fake((f) => f.name.findName()),
//     }
//   })
  
//   export {
//     userBuilder,
//     sessionBuilder
//   }
  
});
});