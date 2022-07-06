const assert = require('assert');
const PageObj = require('../pageobjects/PageObject.page.js');

describe('Task of HW', () => {
    it.only('Load the main page"', async () => {
        await browser.url('https://github.com/');
        await browser.setWindowSize(1510, 900);
        await browser.pause(2000);
    });
    it.only('move to Careers Button', async () => {
        await PageObj.CareersButton.scrollIntoView();
        await browser.pause(3000);
    });
    it.only('Click to CareersButton', async () => {
        await PageObj.clickCareersButton();
        await browser.pause(2000);
    });
    it.only('Click to Open Button', async () => {
        await PageObj.clickOpenButton();
        await browser.pause(2000);
    });
    it.only('Print text in console', async () => {
        console.log("Text for element1:" + await PageObj.BSButton.getText());
        console.log("Text for element2:" + await PageObj.DesignButton.getText());
        console.log("Text for element3:" + await PageObj.EngineeringButton.getText());
        console.log("Text for element4:" + await PageObj.ExecutiveButton.getText());
        console.log("Text for element5:" + await PageObj.FinanceButton.getText());
        console.log("Text for element6:" + await PageObj.LegalButton.getText());
        console.log("Text for element7:" + await PageObj.MarketingButton.getText());
        console.log("Text for element8:" + await PageObj.OperationsButton.getText());
        console.log("Text for element9:" + await PageObj.ProductButton.getText());
        console.log("Text for element10:" + await PageObj.SalesButton.getText());
        console.log("Text for element11:" + await PageObj.SecurityButton.getText());
        console.log("Text for element12:" + await PageObj.SupportButton.getText());
    });
})