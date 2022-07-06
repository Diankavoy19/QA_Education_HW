const assert = require('assert');
const PageObj1 = require('../pageobjects/PageObject1.page.js');

describe('Load login page ', async() => {
    xit.only(' Load page', async () => {
        await browser.setWindowSize(1510, 900);
        await browser.url('https://stepik.org/catalog?auth=login');
        await browser.pause(2000);
        
    })
    xit.only('click to Forgot button', async() => {
        await PageObj1.clickForgotButton();
        await browser.pause(2000);
      });
    xit.only('enter email', async() => {
        await PageObj1.setEmailReset('didiboo195@gmail.com');
        await browser.pause(1000);
      });
    xit.only('click to Sbrosit button', async() => {
        await PageObj1.clickSbrositButton();
        await browser.pause(2000);
      });
    xit.only('should defect if an element is displayed', async() => {
        const ERROR = await $('//li[text()="Нет пользователя с таким e-mail адресом."]')
        let isDisplayed1 = await ERROR.isDisplayed();
        console.log("IS DISPLAYED ERROR?:" + isDisplayed1);
    });
    xit.only('delete email', async() => {
        await PageObj1.clickEmailReset();
        await browser.pause(2000);
        await PageObj1.EmailReset.keys(['Control', 'a'])
        await browser.pause(4000);
        await PageObj1.EmailReset.keys(['Delete'])
        await browser.pause(2000);
    });
    xit.only('enter email', async() => {
        await PageObj1.setEmailReset('');
        await browser.pause(1000);
      });
      xit.only('click to Sbrosit button', async() => {
        await PageObj1.clickSbrositButton();
        await browser.pause(2000);
      });
      xit.only('delete email', async() => {
        await PageObj1.clickEmailReset();
        await browser.pause(2000);
        await PageObj1.EmailReset.keys(['Control', 'a'])
        await browser.pause(4000);
        await PageObj1.EmailReset.keys(['Delete'])
        await browser.pause(2000);
    });
    xit.only('enter email', async() => {
        await PageObj1.setEmailReset('voitsekhovska_ak18@nuwm.edu.ua');
        await browser.pause(1000);
      });
      xit.only('click to Sbrosit button', async() => {
        await PageObj1.clickSbrositButton();
        await browser.pause(2000);
      });
    xit.only('should defect if an element is displayed', async() => {
        const ERROR1 = await $('//span[text()="На указанный email отправлено письмо с инструкциями по сбросу пароля. Если вы не получили его в течение нескольких минут, проверьте папку спам. Если письма нет, напишите нам: support@stepik.org"]')
        let isDisplayed2 = await ERROR1.isDisplayed();
        console.log("IS DISPLAYED ERROR1?:" + isDisplayed2);
    });
    xit.only('chek url', async() => {
        await expect(browser).toHaveUrlContaining('catalog?after_pass_reset=true&auth=login');
        console.log('URL=' + await browser.getUrl());
      });
})