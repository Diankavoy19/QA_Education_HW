const PageObj2 = require('./pageobjects/PageObjectforswitchbutton.page');

describe('Move to Explore GitHub, click to Topics button and displayed text there', () => {
    it('Load Main Page', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    });
    it('Move To Explore', async () => {
        await PageObj2.ExploreButton.moveTo(16,16);
        await browser.pause(4000);
        await PageObj2.clickExploreButton();
        await browser.pause(2000);
    });
    it('Move To Explore GitHub ', async () => {
        await PageObj2.ExploreGithubButton.moveTo(16,16);
        await browser.pause(4000);
    });
    it('click to Explore GitHub button', async() => {
        await PageObj2.clickExploreGithubButton();
        await browser.pause(2000);
      });
    it('click to Topics button and check that text on the page is displayed', async() => {
        await PageObj2.clickTopicsButton();
        await browser.pause(2000);
        let isDisplayed = await PageObj2.TopicsLabel.isDisplayed();
        console.log("IS DISPLAYED TEXT?:" + isDisplayed);
      });
});
