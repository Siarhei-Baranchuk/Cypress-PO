describe("Browser Actions", () => {
	it("Open page and validate url and H1", () => {
		cy.visit("https://example.com/", { timeout: 10000 });
		cy.url().should("include", "example.com");
		// cy.wait(3000);
		// cy.pause(); // pause until click button on ui tests
		cy.get("h1").should("be.visible");
	});
});
