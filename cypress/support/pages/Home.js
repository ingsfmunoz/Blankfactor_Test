class HomePage {

    visit() {
        cy.visit("/");
    }

    get insightsOption() {
        return '#menu-item-4436';
    }

    get privacyModal() {
        return '.cky-consent-bar';
    }

    get acceptAllButton() {
        return '[data-cky-tag="accept-button"]';
    }

    acceptOurPolicy() {
        cy.get(this.privacyModal).should('be.visible').screenshot('boton-visible');;
        cy.get(this.acceptAllButton).click();
    };

    goToInsightsPage() {
        cy.get(this.insightsOption).should('be.visible').screenshot('boton-visible');;
        cy.get(this.insightsOption).click();
    };

    
}

export default new HomePage();