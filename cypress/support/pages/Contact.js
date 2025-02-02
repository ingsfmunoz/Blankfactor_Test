class Conctact {

    get conctactButton() {
        return '.contact-btn-wrap';
    }

    get firtsNameFields() {
        return '[name="First_name__c"]';
    }

    get lastName() {
        return '[name="Last_Name__c"]';
    }

    get company() {
        return '[name="Company"]';
    }

    get email() {
        return '[name="Email"]';
    }

    get phone() {
        return '[name="Phone"]';
    }

    get tellUsAboutYourProjects() {
        return '[name="Message__c"]';
    }

    get acceptPolicy() {
        return '#policy';
    }

    get getStarted(){
        return 'button[class*="btn btn-large"]';
    }

    get postTitles(){
        return '.heading-4.post-title';
    }

    clickOnBecomeAClient() {
        cy.get(this.conctactButton).should('be.visible');
        cy.get(this.conctactButton).click();
    }

    BecomeClientCreatedInTheForm() {
        cy.get(this.firtsNameFields).should('be.visible');
        cy.get(this.firtsNameFields).type("Tester Testing");
        cy.get(this.lastName).should('be.visible');
        cy.get(this.lastName).type("Tester Testing");
        cy.get(this.company).should('be.visible');
        cy.get(this.company).type("Tester Testing");
        cy.get(this.email).should('be.visible');
        cy.get(this.email).type("testertesting@gmail.com");
        cy.get(this.phone).should('be.visible');
        cy.get(this.phone).type("3175753245");
        cy.get(this.tellUsAboutYourProjects).should('be.visible');
        cy.get(this.tellUsAboutYourProjects).type("Blankfactor Test");
        cy.get(this.acceptPolicy).should('not.be.checked');
        cy.get(this.acceptPolicy).check();
        cy.get(this.acceptPolicy).check().should('be.checked');
        cy.get(this.getStarted).click();
    };

    newCustomerRegistrationEntered(){
        cy.contains('Thank you for your submission').should('be.visible');
        cy.contains('We’ll be in contact within 24 business hours.').should('be.visible');
    }


    printAllPostTitles(){
        cy.scrollAndCapture(this.postTitles);
    }


}




export default new Conctact();