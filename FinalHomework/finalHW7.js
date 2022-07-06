const assert = require('assert');
const Page = require('../pageobjects/page.js');
const PageObj1 = require('../pageobjects/PageObject1.page.js');

describe('Task of HW', () => {
    xit.only('Load Main Page', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    });
    xit.only('Move To Explore', async () => {
        await PageObj1.ExploreButton.moveTo(16,16);
        await browser.pause(4000);
        await PageObj1.clickExploreButton();
        await browser.pause(2000);
    });
    xit.only('Move To Explore GitHub ', async () => {
        await PageObj1.ExploreGithubButton.moveTo(16,16);
        await browser.pause(4000);
        
    });
    xit.only('click to Explore GitHub button', async() => {
        await PageObj1.clickExploreGithubButton();
        await browser.pause(2000);
      });
    xit.only('click to Topics button and check that text on the page is displayed', async() => {
        await PageObj1.clickTopicsButton();
        await browser.pause(2000);
        let isDisplayed = await PageObj1.TopicsLabel.isDisplayed();
        console.log("IS DISPLAYED TEXT?:" + isDisplayed);
      });
})