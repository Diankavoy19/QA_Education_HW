const assert = require('assert');
const PageObj1 = require('../pageobjects/PageObject1.page.js');

describe('Load login page ', async() => {
    xit.only(' Load page', async () => {
        await browser.setWindowSize(1510, 900);
        await browser.url('https://stepik.org/catalog?auth=login');
        
    })
    xit.only('enter email', async() => {
        await PageObj1.setEmailSign('didiboo19@gmail.com');
        await browser.pause(1000);
      });
    xit.only('generate password ', async() => {
        await PageObj1.setPasswordSign('Diankavoy987654321');
        await browser.pause(1000);
      });
    xit.only('should defect if email is displayed', async() => {
        let isDisplayed1 = await PageObj1.EmailSign.isDisplayed();
        console.log("IS DISPLAYED EMAIL?:" + isDisplayed1);
    });
    xit.only('should defect if password is displayed', async() => {
      let isDisplayed2 = await PageObj1.PasswordSign.isDisplayed();
      console.log("IS DISPLAYED PASSWORD?:" + isDisplayed2);
    });
      it.only('should defect if an element is displayed', async() => {
        let isDisplayed3 = await PageObj1.SubButton.isDisplayed();
        console.log("IS DISPLAYED ELEMENT?:" + isDisplayed3);
      });
    xit.only('click to Submit button', async() => {
        await PageObj1.clickSubButton();
        await browser.pause(2000);
      });
    xit.only('chek url', async() => {
        await expect(browser).toHaveUrlContaining('catalog?auth=login');
        console.log('URL=' + await browser.getUrl());
      });
    xit.only('should defect if an element is displayed', async() => {
          const Search = await $('[class="button_with-loader search-form__submit"]')
          let isDisplayed4 = await Search.isDisplayed();
          console.log("IS DISPLAYED SEARCH?:" + isDisplayed4);
      });
})