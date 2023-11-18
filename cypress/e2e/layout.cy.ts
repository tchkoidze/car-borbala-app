/// <reference types="cypress" />

describe("test layout components", () => {
  it("you can see careers", () => {
    cy.visit("/");
    cy.get("#careers-link").should("be.visible");
  });

  it("you can see lenguge selector", () => {
    cy.visit("/");
    cy.get("#languge").should("be.visible");

    // Get the initial selected language
    cy.get("#languge").invoke("val").should("eq", "en");

    // Trigger a change in language to 'geo'
    cy.get("#languge").select("geo");

    // Check if the language has changed
    cy.get("#languge").invoke("val").should("eq", "geo");
  });

  it("you can see navigate to about page", () => {
    cy.visit("/");
    cy.get("#about").click();
    cy.url().should("include", "about");
  });

  it("you can see navigate to home page", () => {
    cy.visit("/");
    cy.get("#home").click();
    cy.url().should("include", "home");
  });
});
