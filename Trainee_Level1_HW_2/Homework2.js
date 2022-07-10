const JSONWireProtocol = '//*[text()="JSONWire protocol"]';
const LinkOnHomeOnThePageJSONWireProtocole = 'div>a[href="/SeleniumHQ/selenium/wiki"]';
const HeaderTitle = '.postHeaderTitle';
const TwitterLinkInFooterofAPIPage = 'a[href="https://twitter.com/webdriverio"]';
const HelpPage ='[href="/help.html"]';
describe('Check webdriverio methods part 2', () => {
    xit('Task 1: should go to the page', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
    });
    xit('Task 2: should open link of JSONWire protocol in new tab', async () => {
        await browser.newWindow(await $(JSONWireProtocol).getAttribute('href'));
        await browser.pause(2000);
    });
    xit('Task 3: should switch on open tab', async () => {
        await browser.switchWindow('JsonWireProtocol · SeleniumHQ/selenium Wiki · GitHub');
        await browser.pause(2000);
    });
    xit('Task 4: should check that an element is displayed and display the result in the console ', async () => {
        let isDisplayed = await $(LinkOnHomeOnThePageJSONWireProtocole).isDisplayed();
        console.log("IS DISPLAYED Link On Home On The Page JSONWireProtocole?:" + isDisplayed);
        await browser.pause(2000);
    });
    xit('Task 5: should switch on tab with API Page', async () => {
        await browser.switchWindow('API Docs · WebdriverIO');
        await browser.pause(2000);
    });
    xit('Task 6: should use method waitUntil and wait that text, which is contained in element ".postHeaderTitle" = "API Docs"', async () => {
        await browser.waitUntil(async() => {
            return  await $(HeaderTitle).getText();
        },5000, 'Text is not API Docs');
    });
    xit('Task 7: should do a screenshot of element ".postHeaderTitle"', async () => {
        await $(HeaderTitle).saveScreenshot('HeaderTitleScreenshot.png');
    });
    xit('Task 8: should print execution result of comand "isDisplayed()" in console for Twitter locator', async () => {
        let isDisplayedTwitterLink = await $(TwitterLinkInFooterofAPIPage).isDisplayed();
        console.log("IS DISPLAYED TWITTER LOCATOR?:" + isDisplayedTwitterLink);
        await browser.pause(2000);
    });
    xit('Task 9: should print execution result of comand "isDisplayedInViewPort()" in console for Twitter locator', async () => {
        let isDisplayedInViewport = await $(TwitterLinkInFooterofAPIPage).isDisplayedInViewport();
        console.log("is Displayed In Viewport TWITTER LOCATOR?:" + isDisplayedInViewport);
    });
    xit('Task 10: should scroll to the element Twitter Link', async () => {
        await $(TwitterLinkInFooterofAPIPage).scrollIntoView();
        await browser.pause(3000);
    });
    xit('Task 11: should print execution result of comand "isDisplayed()" in console for Twitter locator', async () => {
        isDisplayedTwitterLink = await $(TwitterLinkInFooterofAPIPage).isDisplayed();
        console.log("IS DISPLAYED TWITTER LOCATOR?:" + isDisplayedTwitterLink);
        await browser.pause(2000);
    });
    xit('Task 12: should print execution result of comand "isDisplayedInViewPort()" in console for Twitter locator', async () => {
        isDisplayedInViewport = await $(TwitterLinkInFooterofAPIPage).isDisplayedInViewport();
        console.log("is Displayed In Viewport TWITTER LOCATOR?:" + isDisplayedInViewport);
        await browser.pause(2000);
    });
    xit('Task 13: should print execution result of comand "isFocused" for Help locator before comand click', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        console.log("help.isFocused() before click:" + await $(HelpPage).isFocused());
        await browser.pause(2000);
    });
    xit('Task 14: should click on the Help locator"', async () => {
        await $(HelpPage).click();
    });
    xit('Task 15: should print execution result of comand "isFocused" for Help locator after comand click', async () => {
        console.log("help.isFocused() after click:" + await $(HelpPage).isFocused());
        await browser.pause(2000);
    });
});