const PageObj1 = require('./pageobjects/PageObjectforAuthorization.page');
const SearchInput = 'div.with-autocomplete__content div input';

describe('fake authorization', async() => {
    it(' Load the page', async () => {
        await browser.setWindowSize(1510, 900);
        await browser.url('https://stepik.org/catalog?auth=login');
    });
    it('enter email', async() => {
        await PageObj1.setEmailSign('didiboo19@gmail.com');
        await browser.pause(1000);
      });
    it('generate password ', async() => {
        await PageObj1.setPasswordSign('Diankavoy987654321');
        await browser.pause(1000);
      });
    it('should defect if email is displayed', async() => {
        let isDisplayedEmail = await PageObj1.EmailSign.isDisplayed();
        console.log("IS DISPLAYED EMAIL?:" + isDisplayedEmail);
      });
    it('should defect if password is displayed', async() => {
      let isDisplayedPassword = await PageObj1.PasswordSign.isDisplayed();
      console.log("IS DISPLAYED PASSWORD?:" + isDisplayedPassword);
      });
    it('should defect if an element is displayed', async() => {
        let isDisplayedSubmitButton = await PageObj1.SubmitButton.isDisplayed();
        console.log("IS DISPLAYED ELEMENT?:" + isDisplayedSubmitButton);
      });
    it('click to Submit button', async() => {
        await PageObj1.clickSubmitButton();
        await browser.pause(2000);
      });
    it('chek url', async() => {
        await expect(browser).toHaveUrlContaining('catalog?auth=login');
        console.log('URL=' + await browser.getUrl());
      });
    it('should defect if an element is displayed', async() => {
          let isDisplayedSearch = await $(SearchInput).isDisplayed();
          console.log("IS DISPLAYED SEARCH INPUT?:" + isDisplayedSearch);
      });
});
