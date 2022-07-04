const assert = require('assert')

describe.only('testcases', () => {
    it('SignIn to GitHub with not valid credentials', async () => {
        await browser.url('https://github.com/');

        const SignInButton = await $('[href="/login"]')
        await browser.pause(2000);
        await SignInButton.click()
        await browser.pause(2000);

        const elem = await $('[id="login_field"]')
        await elem.setValue('');
        await browser.pause(2000);
        const password = await $('[id="password"]')
        await password.setValue('');
        await browser.pause(2000);
        
        const LoginButton = await $('input[class="btn btn-primary btn-block js-sign-in-button"]')
        await browser.pause(2000);
        await LoginButton.click()
        await browser.pause(5000);
    });
    it('Testcase1', async () => {
        await browser.url('https://github.com/');
        const gitHubLink = await $('a[href="https://www.githubstatus.com/"]');
        await browser.pause(4000);
        await gitHubLink.scrollIntoView();
        await browser.pause(2000);
        await gitHubLink.click()

        const MainButton = await $('nav a[class="py-2 ml-3 ml-lg-4"]');
        await browser.pause(2000);
        await MainButton.click()
        const TwitterButton = await $('//*[contains(text(),"Войти")]')
        await browser.pause(2000);
        await TwitterButton.click()
        await browser.pause(2000);

        const elem1 = await $('[class="r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-t60dpp r-1dz5y72 r-fdjqy7 r-13qz1uu"]')
        await elem1.setValue('');
        await browser.pause(2000);
        const TwButton = await $('[class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]')
        await TwButton.click()
        await browser.pause(1000);
    });
    it('Testcase2', async () => {
        await browser.url('https://github.com/');
        const ContactButton = await $('a[href="https://support.github.com?tags=dotcom-footer"]');
        await browser.pause(4000);
        await ContactButton.scrollIntoView();
        await browser.pause(2000);
        await ContactButton.click()
        const FindButton = await $('[class="form-control form-control input-block subnav-search-input width-full"]');
        await FindButton.setValue('iнформацiйнi системи');
        await browser.keys(['Enter'])
        await browser.pause(3000);
    })
    it('Testcase3', async () => {
        await browser.url('https://github.com/');
        const MButton = await $('//*[contains(text()," Why GitHub")]');
        await browser.pause(4000);
        await MButton.moveTo(16,16);
        await browser.pause(4000);
        const IntegrationstButton = await $('a[href="/features/integrations"]');
        await browser.pause(4000);
        await IntegrationstButton.click()
        await browser.pause(4000);
        await browser.saveScreenshot('Testcase3Screenshot.png');
        await browser.pause(4000);
    })
    it('Testcase4', async () => {
        await browser.url('https://github.com/');
        const TextElement = await $('[class="form-control border-0 f4-mktg py-3 px-4 width-full"]');
        await TextElement.setValue('Testcase4');
        await TextElement.keys(['Control', 'a'])
        await browser.pause(2000);
        await TextElement.keys(['Control', 'c'])
        await browser.newWindow('https://www.google.com/');
        await browser.pause(2000);
        const GoogleButton = await $('[class="gLFyf gsfi"]');
        await GoogleButton.setValue( browser.keys(['Control', 'v']));
        await browser.pause(2000);
        await browser.keys(['Enter'])
        await browser.pause(3000);
        await browser.saveScreenshot('Testcase4Screenshot.png');
        await browser.pause(4000);
    })
    it('Testcase5', async () => {
        await browser.url('https://github.com/');
        await browser.pause(4000);
        browser.setWindowSize(285, 356)
        await browser.pause(4000);
        browser.setWindowSize(1460, 800)
        await browser.pause(4000);
        const SearchElement = await $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]');
        await SearchElement.setValue('Testcase5');
        await browser.pause(4000);
        await SearchElement.keys(['Control', 'a'])
        await browser.pause(4000);
        await SearchElement.keys(['Delete'])
        await browser.pause(4000);
        await SearchElement.keys(['Enter'])
        await browser.pause(4000);
    })

})
