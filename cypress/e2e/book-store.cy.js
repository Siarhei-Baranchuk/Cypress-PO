describe("Book store", () => {
	it("Load books website", () => {
		cy.visit("https://books.toscrape.com/", { timeout: 10000 });
		cy.url().should("include", "toscrape");

		cy.get("a").contains("Travel").click();
		cy.get("h1").contains("Travel");
	});
});
