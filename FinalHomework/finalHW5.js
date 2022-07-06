const assert = require('assert')
const PageObj1 = require('../pageobjects/PageObject1.page.js');

describe('testcases', () => {
    xit.only('Load Main Page', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    })
    xit.only('Move To Product', async () => {
        await PageObj1.ProductButton.moveTo(16,16);
        await browser.pause(2000);
        let isDisplayed1 = await PageObj1.ProductButton.isDisplayed();
        console.log("IS DISPLAYED Product?:" + isDisplayed1);
    });
    xit.only('Move To Enterprice', async () => {
        await PageObj1.EnterpriseButton.moveTo(16,16);
        await browser.pause(2000);
        let isDisplayed2 = await PageObj1.EnterpriseButton.isDisplayed();
        console.log("IS DISPLAYED Enterprice?:" + isDisplayed2);
    });
    xit.only('Move To Explore', async () => {
        await PageObj1.ExploreButton.moveTo(16,16);
        await browser.pause(4000);
        let isDisplayed3 = await PageObj1.ExploreButton.isDisplayed();
        console.log("IS DISPLAYED Explore?:" + isDisplayed3);
    });
    xit.only('Move To Marketplace', async () => {
        await PageObj1.MarketplaceButton.moveTo(16,16);
        await browser.pause(4000);
        let isDisplayed4 = await PageObj1.MarketplaceButton.isDisplayed();
        console.log("IS DISPLAYED Marketplace?:" + isDisplayed4);
    });
    xit.only('Move To Pricing', async () => {
        await PageObj1.PricingButton.moveTo(16,16);
        await browser.pause(4000);
        let isDisplayed5 = await PageObj1.PricingButton.isDisplayed();
        console.log("IS DISPLAYED Pricing?:" + isDisplayed5);
    });

})