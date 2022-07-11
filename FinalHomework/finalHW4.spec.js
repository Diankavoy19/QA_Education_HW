const PageObj2 = require('./pageobjects/PageObjectforAuthorization.page');
const ERROR = '//*[@role="alert"]';
const ERRORPassword = '//*[@id="login_form"]//span';

describe('fake authorization with errors ', async() => {
    it(' Load page', async () => {
        await browser.setWindowSize(1510, 900);
        await browser.url('https://stepik.org/catalog?auth=login');
        await browser.pause(2000);
    });
    it('click to Forgot button', async() => {
        await PageObj2.clickForgotButton();
        await browser.pause(2000);
      });
    it('enter email', async() => {
        await PageObj2.setEmailReset('didiboo195@gmail.com');
        await browser.pause(1000);
      });
    it('click to Sbrosit button', async() => {
        await PageObj2.clickSbrositButton();
        await browser.pause(2000);
      });
    it('should defect if an element is displayed', async() => {
        let isDisplayedError = await $(ERROR).isDisplayed();
        console.log("IS DISPLAYED ERROR?:" + isDisplayedError);
    });
    it('delete email', async() => {
        await PageObj2.clickEmailReset();
        await browser.pause(2000);
        await PageObj2.EmailReset.keys(['Control', 'a']);
        await browser.pause(4000);
        await PageObj2.EmailReset.keys(['Delete']);
        await browser.pause(2000);
    });
    it('enter email', async() => {
        await PageObj2.setEmailReset('');
        await browser.pause(1000);
    });
    it('click to Sbrosit button', async() => {
        await PageObj2.clickSbrositButton();
        await browser.pause(2000);
    });
    it('delete email', async() => {
        await PageObj2.clickEmailReset();
        await browser.pause(2000);
        await PageObj2.EmailReset.keys(['Control', 'a']);
        await browser.pause(4000);
        await PageObj2.EmailReset.keys(['Delete']);
        await browser.pause(2000);
    });
    it('enter email', async() => {
        await PageObj2.setEmailReset('voitsekhovska_ak18@nuwm.edu.ua');
        await browser.pause(1000);
    });
    it('click to Sbrosit button', async() => {
        await PageObj2.clickSbrositButton();
        await browser.pause(2000);
    });
    it('should defect if an element is displayed', async() => {
        let isDisplayedError = await $(ERRORPassword).isDisplayed();
        console.log("IS DISPLAYED ERROR Password?:" + isDisplayedError);
    });
    it('chek url', async() => {
        await expect(browser).toHaveUrlContaining('catalog?after_pass_reset=true&auth=login');
        console.log('URL=' + await browser.getUrl());
    });
});
