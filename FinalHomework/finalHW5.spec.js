const PageObj2 = require('./pageobjects/PageObjectforswitchbutton.page');

describe('switch beetween button on the main page of github', () => {
    it('Load Main Page', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    });
    it('Move To Product', async () => {
        await PageObj2.ProductButton.moveTo(16,16);
        await browser.pause(2000);
        await PageObj2.clickProductButton();
        await browser.pause(2000);
        let isDisplayedProductButton = await PageObj2.ProductButton.isDisplayed();
        console.log("IS DISPLAYED Product Button?:" + isDisplayedProductButton);
    });
    it('Move To Enterprice', async () => {
        await PageObj2.EnterpriseButton.moveTo(16,16);
        await browser.pause(2000);
        let isDisplayedEnterpriceButton = await PageObj2.EnterpriseButton.isDisplayed();
        console.log("IS DISPLAYED Enterprice Button?:" + isDisplayedEnterpriceButton);
    });
    it('Move To Explore', async () => {
        await PageObj2.ExploreButton.moveTo(16,16);
        await browser.pause(4000);
        let isDisplayedExploreButton = await PageObj2.ExploreButton.isDisplayed();
        console.log("IS DISPLAYED Explore Button?:" + isDisplayedExploreButton);
    });
    it('Move To Marketplace', async () => {
        await PageObj2.MarketplaceButton.moveTo(16,16);
        await browser.pause(4000);
        let isDisplayedMarketplaceButton = await PageObj2.MarketplaceButton.isDisplayed();
        console.log("IS DISPLAYED Marketplace Button?:" + isDisplayedMarketplaceButton);
    });
    it('Move To Pricing', async () => {
        await PageObj2.PricingButton.moveTo(16,16);
        await browser.pause(4000);
        let isDisplayedPricingButton = await PageObj2.PricingButton.isDisplayed();
        console.log("IS DISPLAYED Pricing Button?:" + isDisplayedPricingButton);
    });
});
