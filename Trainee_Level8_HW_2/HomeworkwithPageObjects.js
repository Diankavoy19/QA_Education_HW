const mainPage = require('..//../pageobjects/main.page');
const docsPage = require('..//../pageobjects/docs.page.js');
const APIPage = require('..//../pageobjects/api.page.js');
const ContributePage = require('..//../pageobjects/contribute.page.js');
const HelpPage = require('..//../pageobjects/help.page.js');
const VersionPage = require('..//../pageobjects/version.page.js');
const PastVersionPage = require('..//../pageobjects/pastversion.page.js');
const DocumentationPage = require('..//../pageobjects/documentation.page.js');
const helpButton = "div.gridBlock div:first-Child div.blockContent h2 div span";
describe('v6.webdriver.io page', async() => {
    it('should demonstrate the addValue command', async() => {
        await browser.url('https://v6.webdriver.io/')
        await mainPage.searchInput.addValue('test');
        await browser.pause(2000);
        await mainPage.setUserName('type with method');
        await browser.pause(2000);
    });
    it('should click Docs button', async() => {
        await docsPage.clickEditButton();
        await browser.pause(2000);
    });
    it('should click  button (Homework)', async() => {
        await browser.url('https://v6.webdriver.io/')
        await browser.pause(2000);
        await APIPage.clickEditButton();
        await browser.pause(2000);
        await ContributePage.clickEditButton();
        await browser.pause(2000);
        await HelpPage.clickEditButton();
        await browser.pause(2000);
        let isDisplayed = await $(helpButton).isDisplayed();
        console.log("IS DISPLAYED?:" + isDisplayed);
        await browser.pause(2000);
        await VersionPage.clickEditButton();
        await browser.pause(2000);
        await PastVersionPage.clickEditButton();
        await browser.pause(2000);
        await DocumentationPage.clickEditButton();
        await browser.pause(2000);
    });
});
