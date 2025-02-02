import homePage from "../support/pages/Home.js";
import InsightsPage from "../support/pages/Insights.js";

describe ("Navigate to Insights", () => {

    beforeEach (()=>{
        homePage.visit();     
    })
    it('Accept our policy in the Blankfactor page', () => {
        homePage.acceptOurPolicy();
    });

    it('Verify the Sofia Gonzalez Page', () => {
        homePage.goToInsightsPage();
        InsightsPage.clicOnBlog();
        InsightsPage.searchArticle();
        InsightsPage.verifyPage();
    });

});