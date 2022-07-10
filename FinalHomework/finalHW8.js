const PageObj1 = require('../../pageobjects/PageObjectwithwebdriverio.page.js');
const SearchInput = '[data-test-selector="nav-search-input"]';
describe('Task with SearchInput', () => {
    xit.only('print "webdriverio" in Search Input, press enter, click TypeScript and fist link there', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
        await $(SearchInput).setValue('webdriverio');
        await $(SearchInput).keys(['Enter']);
        await browser.pause(2000);
        await PageObj1.clickTypeScriptButton();
        await browser.pause(2000);
        await PageObj1.clickTypeScriptURLButton();
        await browser.pause(2000);
    });
    xit.only('chek url', async() => {
        await expect(browser).toHaveUrlContaining('webdriverio');
        console.log('URL=' + await browser.getUrl());
      });
});