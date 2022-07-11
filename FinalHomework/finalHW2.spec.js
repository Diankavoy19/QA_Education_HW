const PageObj1 = require('./pageobjects/PageObjectforFakeRegistaration2.page');
const randGenerate = require("./pageobjects/randGenerate");

describe('fake registration on another site', async() => {
    it(' Load page', async () => {
        await browser.setWindowSize(1510, 900);
        await browser.url('https://stepik.org/catalog?auth=registration');
        await browser.pause(1000);
    });
    it('generate username ', async() => {
        var username = await randGenerate.makeid(6);
        console.log("Generate username :" + username);
        await PageObj1.setUserName(username);
        await browser.pause(1000);
      });
    it('generate email', async() => {
        var email = await randGenerate.getEmail();
        console.log("Generate email :" + email);
        await PageObj1.setEmail(email);
        await browser.pause(1000);
      });
    it('generate password ', async() => {
        var password = await randGenerate.makePass(12);
        console.log("Generate password :" + password);
        await PageObj1.setPassword(password);
        await browser.pause(1000);
      });
    it('click to Submit button', async() => {
        await PageObj1.clickSubmitButton();
        await browser.pause(2000);
        
      });
    it('chek url', async() => {
      console.log('URL=' + await browser.getUrl());
      await expect(browser).toHaveUrlContaining('auth=registration');
      });
});
