const assert = require('assert')

describe('v5.webdriver.io page', () => {
    it('Homework2', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const Attribute = await $('//*[text()="JSONWire protocol"]')
        await browser.newWindow(await Attribute.getAttribute('href'));
        await browser.pause(2000);

        await browser.switchWindow('JsonWireProtocol · SeleniumHQ/selenium Wiki · GitHub')
        await browser.pause(2000);

        const Element = await $('a[href="/SeleniumHQ/selenium/wiki"]')
        let isDisplayed = await Element.isDisplayed();
        console.log("IS DISPLAYED?:" + isDisplayed);
        await browser.pause(2000);

        await browser.switchWindow('API Docs · WebdriverIO')
        await browser.pause(2000);
        
        const HeaderTitle = await $('.postHeaderTitle')
        await browser.waitUntil(async() => {
            return  await HeaderTitle.getText();
        },5000, 'Text is not API Docs');
        await HeaderTitle.saveScreenshot('HeaderTitleScreenshot.png');


        const Element1 = await $('a[href="https://twitter.com/webdriverio"]')
        let isDisplayed1 = await Element1.isDisplayed();
        console.log("IS DISPLAYED LOCATOR?:" + isDisplayed1);
        await browser.pause(2000);
        
        let isDisplayedInViewport = await $('a[href="https://twitter.com/webdriverio"]').isDisplayedInViewport()
        console.log("isDisplayedInViewport?:" + isDisplayedInViewport);
        await Element1.scrollIntoView();
        await browser.pause(3000);

        isDisplayed1 = await Element1.isDisplayed();
        isDisplayedInViewport = await Element1.isDisplayedInViewport()
        console.log("IS DISPLAYED?:" + isDisplayed1);
        await browser.pause(2000);
        console.log("isDisplayedInViewport?:" + isDisplayedInViewport);
    })
    it('Homework2: last task', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const input = await $('[href="/help.html"]');
        console.log("help.isFocused() before click:" + await input.isFocused());
        await browser.pause(2000);
        await input.click();
        console.log("help.isFocused() after click:" + await input.isFocused());
        await browser.pause(2000);
    })
})
