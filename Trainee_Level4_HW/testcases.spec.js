const LoginButton = '[href="/login"]';
const UsernameField = '[id="login_field"]';
const PasswordField = '[id="password"]';
const SignInButton = 'div:nth-Child(5) div input[value="Sign in"]';
const gitHubStatusLink = 'a[href*="githubstatus"]';
const TwitterButtonofStatus = "div>div>div>nav:nth-Child(3)>a:nth-Child(2)";
const TwitterButtonSignIn = 'div a[data-testid="login"]';
const InputOfTwitterOfSignIn = "//label//div//div[2]//div//input";
const ButtonNextInTwitterLogin = '//*[@role="group"]//*[@role="button"][2]';
const ContactGitHubButton =
    'a[href="https://support.github.com?tags=dotcom-footer"]';
const HelpInputonContactGitHubPage =
    '//form[@id="search-form"]//*[@type="text"]';
const ProductButton =
    "//header//div//div[2]//nav//ul//li[1]//details[1]//summary";
const IntegrationstButton = 'a[href$="integrations"]';
const EmailInputonTheMainPageofGitHub = '//*[@type="email"]';
const GoogleButton = '//*[@role="combobox"]';
const SearchInput = '[data-scoped-placeholder="Search"]';

describe("testcases", () => {
    it("SignIn to GitHub with not valid credentials", async () => {
        await browser.url("https://github.com/");
        await browser.pause(2000);
        await $(LoginButton).click();
        await browser.pause(2000);
        await $(UsernameField).setValue("");
        await browser.pause(2000);
        await $(PasswordField).setValue("");
        await browser.pause(2000);
        await browser.pause(2000);
        await $(SignInButton).click();
        await browser.pause(5000);
    });
    it("Testcase1: Scroll to the Status Link and click, then go to the Twitter Link and Sign In there ", async () => {
        await browser.url("https://github.com/");
        await browser.pause(4000);
        await $(gitHubStatusLink).scrollIntoView();
        await browser.pause(2000);
        await $(gitHubStatusLink).click();
        await browser.pause(2000);
        await $(TwitterButtonofStatus).click();
        await browser.pause(2000);
        await $(TwitterButtonSignIn).click();
        await browser.pause(2000);
        await $(InputOfTwitterOfSignIn).setValue("");
        await browser.pause(2000);
        await $(ButtonNextInTwitterLogin).click();
        await browser.pause(1000);
    });
    it('Testcase2: Scroll to the Contact GitHub Link and click, then print value in input on the page and to press "Enter"', async () => {
        await browser.url("https://github.com/");
        await browser.pause(4000);
        await $(ContactGitHubButton).scrollIntoView();
        await browser.pause(2000);
        await $(ContactGitHubButton).click();
        await $(HelpInputonContactGitHubPage).setValue("i??????????????i????i ??????????????");
        await browser.keys(["Enter"]);
        await browser.pause(3000);
    });
    it("Testcase3: move to Product button, click on the Integrations Button and take a screenshots", async () => {
        await browser.url("https://github.com/");
        await browser.pause(4000);
        await $(ProductButton).moveTo(16, 16);
        await browser.pause(4000);
        await $(IntegrationstButton).click();
        await browser.pause(4000);
        await browser.saveScreenshot("Testcase3Screenshot.png");
        await browser.pause(4000);
    });
    it('Testcase4: set value in Email Input on the main page og GitHub, select text, copy and paste in the Google input on Google Search, then press "Enter" and take a sreenshot', async () => {
        await browser.url("https://github.com/");
        await $(EmailInputonTheMainPageofGitHub).setValue("Testcase4");
        await browser.pause(2000);
        await $(EmailInputonTheMainPageofGitHub).keys(["Control", "a"]);
        await browser.pause(2000);
        await $(EmailInputonTheMainPageofGitHub).keys(["Control", "c"]);
        await browser.newWindow("https://www.google.com/");
        await browser.pause(2000);
        await $(GoogleButton).setValue(browser.keys(["Control", "v"]));
        await browser.keys(["Enter"]);
        await browser.pause(3000);
        await browser.saveScreenshot("Testcase4Screenshot.png");
        await browser.pause(4000);
    });
    it('Testcase5: set window size is smaller and  bigger. set value in Search Input, select, delete and press "Enter" ', async () => {
        await browser.url("https://github.com/");
        await browser.pause(4000);
        browser.setWindowSize(285, 356);
        await browser.pause(4000);
        browser.setWindowSize(1460, 800);
        await browser.pause(4000);
        await $(SearchInput).setValue("Testcase5");
        await browser.pause(4000);
        await $(SearchInput).keys(["Control", "a"]);
        await browser.pause(4000);
        await $(SearchInput).keys(["Delete"]);
        await browser.pause(4000);
        await $(SearchInput).keys(["Enter"]);
        await browser.pause(4000);
    });
});
