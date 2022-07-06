const assert = require('assert')
const PageObj1 = require('../pageobjects/PageObject1.page.js');
const randGenerate = require('./randGenerate');

describe('Task of HW', () => {
    xit.only('Load Main Page', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    });
    xit.only('Move To Pricing', async () => {
        await PageObj1.PricingButton.moveTo(16,16);
        await browser.pause(4000);
    });
    xit.only('Move To Pricing Plans ', async () => {
        await PageObj1.PlanButton.moveTo(16,16);
        await browser.pause(4000);
        
    });
    xit.only('click to Plan button', async() => {
        await PageObj1.clickPlanButton();
        await browser.pause(2000);
      });
    xit.only('click to Join for free', async() => {
        await PageObj1.clickFreeButtoninPlans();
        await browser.pause(2000);
      });
    xit.only('enter username', async() => {
        var username = await randGenerate.makeid(6);
        console.log("Generate username :" + username);
        await PageObj1.setUserNameinGithub(username);
        await browser.pause(1000);
      });
    xit.only('enter email', async() => {
        var email = await randGenerate.getEmail();
        console.log("Generate email :" + email);
        await PageObj1.setEmailinGithub(email);
        await browser.pause(1000);
      });
    xit.only('enter password', async() => {
        var password = await randGenerate.makePass(12);
        console.log("Generate password :" + password);
        await PageObj1.setPasswordinGithub(password);
        await browser.pause(1000);
      });
    xit.only('click checkbox', async() => {
        await PageObj1.clickCheckboxinGithub();
        await browser.pause(2000);
      });  
})