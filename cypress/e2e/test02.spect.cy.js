import homePage from "../support/pages/Home.js";
import ContactPage from "../support/pages/Contact";
import InsightsPage from "../support/pages/Insights.js";

describe ("Become a cutomer", () => {

    beforeEach (()=>{
        homePage.visit();     
    })
    it('Successful form registration - Become a client', () => {
        homePage.acceptOurPolicy();
        ContactPage.clickOnBecomeAClient();
        ContactPage.BecomeClientCreatedInTheForm();
        ContactPage.newCustomerRegistrationEntered();

    });

    it('Post Titles in the Blog Section', () => {
        homePage.goToInsightsPage();
        InsightsPage.clicOnBlog();
        ContactPage.printAllPostTitles();
    });

    

});