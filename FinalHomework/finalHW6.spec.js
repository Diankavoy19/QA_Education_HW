const PageObj2 = require('./pageobjects/PageObjectforswitchbutton.page');
const randGenerate = require("./pageobjects/randGenerate");

describe('go to the Pricing Plan and Join for Free', () => {
    it('Load Main Page', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    });
    it('Move To Pricing', async () => {
        await PageObj2.PricingButton.moveTo(16,16);
        await browser.pause(2000);
        await PageObj2.clickPricingButton();
        await browser.pause(2000);
    });
    it('Move To Pricing Plans ', async () => {
        await PageObj2.PlanButton.moveTo(16,16);
        await browser.pause(4000);
    });
    it('click to Plan button', async() => {
        await PageObj2.clickPlanButton();
        await browser.pause(2000);
    });
    it('click to Join for free', async() => {
        await PageObj2.clickFreeButtoninPlans();
        await browser.pause(2000);
    });
    it('enter username', async() => {
        var username = await randGenerate.makeid(6);
        console.log("Generate username :" + username);
        await PageObj2.setUserNameinGithub(username);
        await browser.pause(1000);
    });
    it('enter email', async() => {
        var email = await randGenerate.getEmail();
        console.log("Generate email :" + email);
        await PageObj2.setEmailinGithub(email);
        await browser.pause(1000);
    });
    it('enter password', async() => {
        var password = await randGenerate.makePass(12);
        console.log("Generate password :" + password);
        await PageObj2.setPasswordinGithub(password);
        await browser.pause(1000);
    });
    it('click checkbox', async() => {
        await PageObj2.clickCheckboxinGithub();
        await browser.pause(2000);
    });  
});
