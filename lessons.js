const assert = require('assert')

describe('v5.webdriver.io page', () => {
    xit('should have the right title', async () => {
        await browser.url('https://v5.webdriver.io');
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
    xit('should demonstrate the addValue command', async() => {
        await browser.url('https://v5.webdriver.io')
        let input = await $('#search_input_react')
        await input.addValue('test')
        await browser.pause(4000);
        await input.addValue(123)
        await browser.pause(2000);
        value = await input.getValue()
        assert(value === 'test123') // true
        await browser.pause(2000);
    })
    xit('should demonstrate  setValue command', async function () {
        await browser.url('https://v5.webdriver.io');
        const elem = await $('#search_input_react');
        await elem.setValue('test123');
        await browser.pause(2000);
    })

    xit('should demonstrate the click command', async() => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('[href="/docs/api.html"]')
        await browser.pause(2000);
        await blogButton.click()
        await browser.pause(2000);
        const guideButton = await $('.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]')
        await guideButton.click()
        await browser.pause(2000);
    })
    xit('should demonstrate the getAttribute command', async() => {
        await browser.url('https://v5.webdriver.io');
        const input = await $('#search_input_react');
        let attr = await input.getAttribute('title')
        console.log("Title attribute is: " + attr) // outputs: "Search"
        await input.setValue('test123');
        attr = await input.getAttribute('value')
        console.log("Value attribute is: " + attr) // outputs: test123
    })
    xit('should demonstrate the getLocation function', async() => {
        await browser.url('https://v5.webdriver.io');
        const logo = await $('#search_input_react')
        const location = await logo.getLocation();
        console.log(location); 
    
        const xLocation = await logo.getLocation('x')
        console.log("xLocation  " + xLocation);
 
    });

    xit('should demonstrate the getText function', async() => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('[href="/blog/"]')
        console.log("Text for element:" + await blogButton.getText());
    });
    xit('should defect if an element is clickable', async() => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('[href="/blog/"]')
        let clickable = await blogButton.isClickable();
        console.log("IS CLICKABLE?:" + clickable);
    });
    xit('should defect if an element is displayed', async() => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('[href="/blog/"]')
        let isDisplayed = await blogButton.isDisplayed();
        console.log("IS DISPLAYED?:" + isDisplayed);
    });
    xit('should defect if an element is visible', async() => {
        await browser.url('https://v5.webdriver.io');
        let isBlogDisplayedInViewport = await $('[href="/blog/"]').isDisplayedInViewport()
        console.log("isBlogDisplayedInViewport?:" + isBlogDisplayedInViewport);
        let isGitHubDisplayedInViewport = await $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport()
        console.log("isGitHubDisplayedInViewport?:" + isGitHubDisplayedInViewport);
    });
    xit('should defect if an element is enabled', async() => {
        await browser.url('https://v5.webdriver.io');
        const blogButton = await $('[href="/blog/"]')
        let isEnabled = await blogButton.isEnabled();
        console.log("IS ENABLED?:" + isEnabled);
    })
    xit('should defect the focus of an element', async() => {
        await browser.url('https://v5.webdriver.io');
        const input = await $('#search_input_react');
        console.log("search.isFocused() before click:" + await input.isFocused());
        await browser.pause(2000);
        await input.click();
        console.log("search.isFocused() after click:" + await input.isFocused());
        await browser.pause(2000);
    })
    xit('should move to element', async() => {
        await browser.url('https://v5.webdriver.io');
        const gitHubLink = await $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        await browser.pause(4000);
        await gitHubLink.scrollIntoView();
        await browser.pause(3000);
    })
    xit('should save a screenshot of the browther view', async function () {
        await browser.url('https://v5.webdriver.io');
        const elem = await $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        await elem.saveScreenshot('elemScreenshot.png');
    });
    xit('should switch to another window', async() => {
        await browser.url('https://google.com');
        await browser.newWindow('https://v5.webdriver.io');
        await browser.pause(2000);

        await browser.switchWindow('google.com')
        await browser.pause(2000);
        await browser.switchWindow('Next-gen WebDriver test framework')
        await browser.pause(2000);
    });
    xit('should wait until', async() => {
        await browser.url('https://v5.webdriver.io');
        await browser.waitUntil(async() => {
            return await $('[href="/blog/"]').isDisplayed();
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
        await browser.url('https://www.google.com')
        await browser.newWindow('https://v5.webdriver.io')
        await browser.pause(2000);

        await browser.switchWindow('google.com')
        await browser.pause(2000);

        await browser.switchWindow('Next-gen WebDriver test framework')
        await browser.pause(2000);
    });

    xit('should wait until text has changed', async() => {
        await browser.url('https://v5.webdriver.io');
    });

})