const PageObj = require('../../pageobjects/PageObjectforFakeRegistration.page.js');
const randGenerate = require('../randGenerate');
describe.only('fake registration ', async() => {
    xit.only(' Load page', async () => {
        await browser.setWindowSize(1510, 900);
        await browser.url('https://ru.coursera.org/signup?redirectTo=%2F');
        await browser.pause(1000);
    });
    xit.only('generate username ', async() => {
        var username = await randGenerate.makeid(6);
        console.log("Generate username :" + username);
        await PageObj.setUserName(username);
        await browser.pause(1000);
      });
    xit.only('generate email', async() => {
        var email = await randGenerate.getEmail();
        console.log("Generate email :" + email);
        await PageObj.setEmail(email);
        await browser.pause(1000);
      });
    xit.only('generate password ', async() => {
        var password = await randGenerate.makePass(12);
        console.log("Generate password :" + password);
        await PageObj.setPassword(password);
        await browser.pause(1000);
      });
    xit.only('click to Submit button', async() => {
        await PageObj.clickSubmitButton();
        await browser.pause(2000);
      });
    xit.only('chek url', async() => {
        console.log('URL=' + await browser.getUrl());
        expect(browser).toHaveUrlContaining('redirectTo');
        });
});