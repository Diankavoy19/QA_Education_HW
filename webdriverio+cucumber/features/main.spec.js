const { Given, When, Then } = require('@wdio/cucumber-framework');
const SearchInput = '#search_input_react';

Given('I am on webdriverio page', async() => {
     await browser.url('https://v5.webdriver.io');
    });
When('I click on search', async() => {
     await $(SearchInput).click();
});
Then('I type text to search', async () => {
     await $(SearchInput).addValue('text');
     await browser.pause(2000);
});