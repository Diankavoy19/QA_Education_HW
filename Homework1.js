const assert = require('assert')

describe('v5.webdriver.io page', () => {
    xit('Task 1: should go to the page', async () => {
        await browser.url('https://v5.webdriver.io');
    })
    xit('Task 2 and 3: should demonstrate the click command and display url of page in the console', async() => {
        await browser.url('https://v5.webdriver.io');
        const apiButton = await $('[href="/docs/api.html"]')
        await apiButton.click()
        console.log("Address  " + await browser.getUrl())
    })
    xit('Task 4:  display Header Title of page in the console', async() => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const HeaderTitle = await $('.postHeaderTitle')
        console.log("Header Title is " + await HeaderTitle.getText())
    })
    xit('Task 5:  display attribute of href element in the console', async() => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        const Attribute = await $('//*[text()="JSONWire protocol"]')
        console.log("Attribute of href element is " + await Attribute.getAttribute('href'))
    })
    xit('Task 6,7,8: print "text is" + add "DONE!" and add pause on 5 minutes ', async function () {
        await browser.url('https://v5.webdriver.io');
        const elem = await $('#search_input_react');
        await elem.setValue('test is ');
        await browser.pause(2000);
        await elem.addValue('DONE!')
        await browser.pause(5000);
    })


})