class PageObj {
    get CareersButton() {
        return $('[href="/about/careers"]');
    };
    clickCareersButton () {
        this.CareersButton.click();
    };
    get OpenButton () {
        return $('[href="#positions"]');
    };
    clickOpenButton () {
        this.OpenButton .click();
    };
    get BusinessSystemsButton () {
        return $('//div[@id="business-systems"]//*[@type="button"]');
    };
    get DesignButton () {
        return $('//div[@id="design"]//*[@type="button"]');
    };
    get EngineeringButton () {
        return $('//div[@id="engineering"]//*[@type="button"]');
    };
    get ExecutiveButton () {
        return $('//div[@id="executive"]//*[@type="button"]');
    };
    get FinanceButton () {
        return $('//div[@id="finance"]//*[@type="button"]');
    };
    get LegalButton () {
        return $('//div[@id="legal"]//*[@type="button"]');
    };
    get MarketingButton () {
        return $('//div[@id="marketing"]//*[@type="button"]');
    };
    get OperationsButton () {
        return $('//div[@id="operations"]//*[@type="button"]');
    };
    get ProductButton () {
        return $('//div[@id="product"]//*[@type="button"]');
    };
    get SalesButton () {
        return $('//div[@id="sales"]//*[@type="button"]');
    };
    get SecurityButton () {
        return $('//div[@id="security"]//*[@type="button"]');
    };
    get SupportButton () {
        return $('//div[@id="support"]//*[@type="button"]');
    };
};
module.exports = new PageObj();