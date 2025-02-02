class Insights {

    verifyPage() {
        cy.url().should("include", "/sofia-gonzalez");
    };

    get insightBlog() {
        return '#menu-item-4436';
    }


    clicOnBlog() {
        cy.contains('a', 'Blog').should('include.text', 'Blog').click();
    };

    /*checkPageAuthor() {
        cy.contains('a', 'Blog').should('include.text', 'Blog');
        cy.contains('a', 'Blog').click();
    };*/

    searchArticle() {
        cy.scrollUntilTextVisible("Why Fintech in Latin America Is Booming");
        cy.contains('a','Sofia Gonzalez').click({ force: true });
    }

}

export default new Insights();