/// <reference types="cypress" />

describe("test layout components", () => {
  it("you can see careers", () => {
    cy.visit("/");
    cy.get("#careers-link").should("be.visible");
  });
});
