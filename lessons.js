const assert = require('assert');
const SearchInput = '#search_input_react';
const APIButton = 'li a[href$="api.html"]';
const guideButton = 'li  a[href$="gettingstarted.html"]';
const blogButton = '[href="/blog/"]';
const gitHubLinkinFooter = 'footer>section>div>a[href^="https://github.com/"]';

describe('v5.webdriver.io page', () => {
    xit('should have the right title', async () => {
        await browser.url('https://v5.webdriver.io');
        const titleofpagewebdriverio = await browser.getTitle();
        assert.strictEqual(titleofpagewebdriverio, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
    xit('should demonstrate the addValue command', async() => {
        await browser.url('https://v5.webdriver.io');
        await $(SearchInput).addValue('test');
        await browser.pause(4000);
        await $(SearchInput).addValue(123);
        await browser.pause(2000);
        value = await $(SearchInput).getValue();
        assert(value === 'test123'); // true
        await browser.pause(2000);
    });
    xit('should demonstrate  setValue command', async function () {
        await browser.url('https://v5.webdriver.io');
        await $(SearchInput).setValue('test123');
        await browser.pause(2000);
    });
    xit('should demonstrate the click command', async() => {
        await browser.url('https://v5.webdriver.io');
        await browser.pause(2000);
        await $(APIButton).click();
        await browser.pause(2000);
        await $(guideButton).click();
        await browser.pause(2000);
    });
    xit('should demonstrate the getAttribute command', async() => {
        await browser.url('https://v5.webdriver.io');
        let SearchAttribute = await $(SearchInput).getAttribute('title');
        console.log("Title attribute is: " + SearchAttribute); // outputs: "Search"
        await $(SearchInput).setValue('test123');
        SearchAttribute = await $(SearchInput).getAttribute('value');
        console.log("Value attribute is: " + SearchAttribute); // outputs: test123
    });
    xit('should demonstrate the getLocation function', async() => {
        await browser.url('https://v5.webdriver.io');
        const location = await $(SearchInput).getLocation();
        console.log(location); 
        const xLocation = await $(SearchInput).getLocation('x')
        console.log("xLocation  " + xLocation);
 
    });
    xit('should demonstrate the getText function', async() => {
        await browser.url('https://v5.webdriver.io');
        console.log("Text for element BlogButton:" + await $(blogButton).getText());
    });
    xit('should defect if an element is clickable', async() => {
        await browser.url('https://v5.webdriver.io');
        let clickable = await $(blogButton).isClickable();
        console.log("IS CLICKABLE BlogButton?:" + clickable);
    });
    xit('should defect if an element is displayed', async() => {
        await browser.url('https://v5.webdriver.io');
        let isDisplayed = await $(blogButton).isDisplayed();
        console.log("IS DISPLAYED BlogButton?:" + isDisplayed);
    });
    xit('should defect if an element is visible', async() => {
        await browser.url('https://v5.webdriver.io');
        let isBlogDisplayedInViewport = await $(blogButton).isDisplayedInViewport();
        console.log("isBlogDisplayedInViewport BlogButton?:" + isBlogDisplayedInViewport);
        let isGitHubDisplayedInViewport = await $(gitHubLinkinFooter).isDisplayedInViewport();
        console.log("isGitHubDisplayedInViewport gitHub Link in Footer?:" + isGitHubDisplayedInViewport);
    });
    xit('should defect if an element is enabled', async() => {
        await browser.url('https://v5.webdriver.io');
        let isEnabled = await $(blogButton).isEnabled();
        console.log("IS ENABLED BlogButton?:" + isEnabled);
    });
    xit('should defect the focus of an element', async() => {
        await browser.url('https://v5.webdriver.io');
        console.log("search.isFocused() before click:" + await $(SearchInput).isFocused());
        await browser.pause(2000);
        await $(SearchInput).click();
        console.log("search.isFocused() after click:" + await $(SearchInput).isFocused());
        await browser.pause(2000);
    });
    xit('should move to element', async() => {
        await browser.url('https://v5.webdriver.io');
        await browser.pause(4000);
        await $(gitHubLinkinFooter).scrollIntoView();
        await browser.pause(3000);
    });
    xit('should save a screenshot of the browther view', async function () {
        await browser.url('https://v5.webdriver.io');
        await $(gitHubLinkinFooter).saveScreenshot('ScreenshotofgitHubLinkinFooter.png');
    });
    xit('should switch to another window', async() => {
        await browser.url('https://google.com');
        await browser.newWindow('https://v5.webdriver.io');
        await browser.pause(2000);
        await browser.switchWindow('google.com');
        await browser.pause(2000);
        await browser.switchWindow('Next-gen WebDriver test framework');
        await browser.pause(2000);
    });
    xit('should wait until', async() => {
        await browser.url('https://v5.webdriver.io');
        await browser.waitUntil(async() => {
            return await $(blogButton).isDisplayed();
        },5000, 'blog is not displayed');
    });
    xit('should get html for certain elements', async() => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        var outerHTML = await $('.siteNavGroupActive').getHTML();
        console.log("outerHTML:" + await outerHTML);
        var innerHTML = await $('.siteNavGroupActive').getHTML(false);
        console.log("innerHTML:" + await innerHTML);
    });
    xit('should switch to another window', async() => {
        await browser.url('https://www.google.com');
        await browser.newWindow('https://v5.webdriver.io');
        await browser.pause(2000);
        await browser.switchWindow('google.com');
        await browser.pause(2000);
        await browser.switchWindow('Next-gen WebDriver test framework');
        await browser.pause(2000);
    });
    xit('should wait until text has changed', async() => {
        await browser.url('https://v5.webdriver.io');
    });
});