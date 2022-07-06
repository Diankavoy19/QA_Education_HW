const assert = require('assert');
const PageObj1 = require('../pageobjects/PageObject1.page.js');

describe('Task of HW', () => {
    xit.only('Task with word "webriverio"', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
        const TextElement = await $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]');
        await TextElement.setValue('webdriverio');
        await TextElement.keys(['Enter'])
        await browser.pause(2000);
        await PageObj1.clickTSButton();
        await browser.pause(2000);
        await PageObj1.clickTSURLButton();
        await browser.pause(2000);
    });
    xit.only('chek url', async() => {
        await expect(browser).toHaveUrlContaining('webdriverio');
        console.log('URL=' + await browser.getUrl());
      });
})