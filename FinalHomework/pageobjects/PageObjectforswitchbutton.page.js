class PageObj2 {
    get PlanButton() {
        return $('[href="/pricing"]');
    };
    clickPlanButton () {
        this.PlanButton.click();
    };
    get ProductButton() {
        return $("//nav//ul//li[1]//details//summary");
    };
    clickProductButton () {
        this.ProductButton.click();
        };
    get EnterpriseButton() {
        return $('nav ul li a[href="/enterprise"]');
    };
    get ExploreButton() {
        return $("//nav//ul//li[4]//details//summary ");
    };
    clickExploreButton () {
        this.ExploreButton.click();
    };
    get MarketplaceButton() {
        return $('[href="/marketplace"]');
    };
    get PricingButton() {
        return $("//nav//ul//li[6]//details//summary ");
    };
    clickPricingButton () {
        this.PricingButton.click();
    };
    get FreeButtoninPlans() {
        return $('[test_selector="plan-input-free"]');
    };
    clickFreeButtoninPlans () {
        this.FreeButtoninPlans.click();
    };
    get UserNameinGithub() {
        return $('input[name="user[login]"]');
    };
    setUserNameinGithub (value) {
        this.UserNameinGithub.addValue(value);
    };
    get EmailinGithub() {
        return $('input[name="user[email]"]');
    };
    setEmailinGithub (value) {
        this.EmailinGithub.addValue(value);
    };
    get PasswordinGithub() {
        return $('input[name="user[password]"]');
    };
    setPasswordinGithub (value) {
        this.PasswordinGithub.addValue(value);
    };
    get CheckboxinGithub() {
        return $('input[name="all_emails"]');
    };
    clickCheckboxinGithub () {
        this.CheckboxinGithub.click();
    };
    get ExploreGithubButton() {
        return $('[href="/explore"]');
    };
    clickExploreGithubButton () {
        this.ExploreGithubButton.click();
    };
    get TopicsButton() {
    return $('//nav//div//a[2]');
    }; 
    clickTopicsButton () {
    this.TopicsButton.click();
    };
    get TopicsLabel() {
    return $('//div//div//h1');
    };
    };
    module.exports = new PageObj2();
