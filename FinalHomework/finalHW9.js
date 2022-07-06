const assert = require('assert');
const PageObj1 = require('../pageobjects/PageObject1.page.js');
const randGenerate = require('./randGenerate');

describe('Task of HW', () => {
    xit.only('Load a Main Page', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    });
    xit.only('move to Start a Free Trial Button', async () => {
        await PageObj1.StartFreeTrialButtonofthemainPage.scrollIntoView();
        await browser.pause(3000);
    });
    xit.only('Click to Start a Free Trial Button', async () => {
        await PageObj1.clickStartFreeTrialButtonofthemainPage();
        await browser.pause(2000);
    });
    xit.only('Click to Enterprise Cloud Button', async () => {
        await PageObj1.clickEnterpriseCloudlButton();
        await browser.pause(2000);
    });
    xit.only('Enter data', async () => {
        var username = await randGenerate.makeid(6);
        console.log("Generate username :" + username);
        await PageObj1.setUserNameofEnterpriceCloud(username);
        await browser.pause(1000);
        var email = await randGenerate.getEmail();
        console.log("Generate email :" + email);
        await PageObj1.setEmailofEnterpriceCloud(email);
        await browser.pause(1000);
        var password = await randGenerate.makePass(12);
        console.log("Generate password :" + password);
        await PageObj1.setPasswordofEnterpriceCloud(password);
        await browser.pause(1000);
    });
    xit.only('Back to the previous page', async () => {
        await browser.back();
        await browser.pause(3000);
    });
    xit.only('Click to Enterprise Server Button', async () => {
        await PageObj1.clickEnterpriseServerlButton();
        await browser.pause(2000);
    });
    xit.only('Enter data', async () => {
        var username = await randGenerate.makeid(6);
        console.log("Generate username :" + username);
        await PageObj1.setNameofEnterpriceServer(username);
        await browser.pause(1000);
        var company = await randGenerate.makeid(6);
        console.log("Generate Company :" + company);
        await PageObj1.setCompanyofEnterpriceServer(company);
        await browser.pause(1000);
        var email = await randGenerate.getEmail();
        console.log("Generate email :" + email);
        await PageObj1.setWorkEmailofEnterpriceServer(email);
        await browser.pause(1000);
        var phone = await randGenerate.makePhone(10);
        console.log("GeneratePhone :" + phone);
        await PageObj1.setPhoneofEnterpriceServer(phone);
        await browser.pause(1000);
    });
    xit.only('Click to Checkbox', async () => {
        await PageObj1.clickESButton();
        await browser.pause(2000);
        await PageObj1.clickESButton1();
        await browser.pause(2000);
    });
    xit.only('move to Checkbox', async () => {
        await PageObj1.ESButton1.scrollIntoView();
        await browser.pause(3000);
    });
    xit.only('Click to Checkbox', async () => {
        await PageObj1.clickESButton1();
        await browser.pause(2000);
    });
    xit.only('Enter textarea', async () => {
        await PageObj1.setTextarea('Testcase is done!');
        await browser.pause(1000);
    });
    xit.only('Click to Checkbox', async () => {
        await PageObj1.clickLastCheckbox();
        await browser.pause(2000);
    });


})