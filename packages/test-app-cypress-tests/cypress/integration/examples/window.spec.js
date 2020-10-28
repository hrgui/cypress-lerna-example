/// <reference types="cypress" />

context("Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("title should be React App", () => {
    cy.title().should("include", "React App");
  });

  it("should say Hello World!", () => {
    cy.get("p").then((x) => {
      expect(x.html()).to.equal("Hello World!");
    });
  });
});
