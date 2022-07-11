const apiButton = 'li a[href="/docs/api.html"]';
const HeaderTitle = ".postHeaderTitle";
const JSONWireProtocol = '//*[text()="JSONWire protocol"]';
const SearchInput = "#search_input_react";

describe("Check webdriverio methods", () => {
    it("Task 1: should go to the page", async () => {
        await browser.url("https://v5.webdriver.io");
    });
    it('Task 2 and 3: should demonstrate the click command and display url of page "API" in the console', async () => {
        await browser.url("https://v5.webdriver.io");
        await $(apiButton).click();
        console.log("Address of page 'API': " + (await browser.getUrl()));
    });
    it("Task 4:  display Header Title of page in the console", async () => {
        await browser.url("https://v5.webdriver.io/docs/api.html");
        console.log("Header Title is " + (await $(HeaderTitle).getText()));
    });
    it("Task 5:  display attribute of href element in the console", async () => {
        await browser.url("https://v5.webdriver.io/docs/api.html");
        console.log(
            "Attribute of href element is " +
                (await $(JSONWireProtocol).getAttribute("href"))
        );
    });
    it('Task 6,7,8: print "text is" in SearchInput + add "DONE!" and add pause on 5 minutes ', async function () {
        await browser.url("https://v5.webdriver.io");
        await $(SearchInput).setValue("test is ");
        await browser.pause(2000);
        await $(SearchInput).addValue("DONE!");
        await browser.pause(5000);
    });
});
