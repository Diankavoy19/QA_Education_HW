class PageObj1 {
    get StartFreeTrialButtonofthemainPage() {
        return $('[href^="/organizations/enterprise"]');
    };
    clickStartFreeTrialButtonofthemainPage () {
        this.StartFreeTrialButtonofthemainPage.click();
    };
    get EnterpriseCloudlButton() {
        return $('[href^="https://github.com/join?plan=business"]');
    };
    clickEnterpriseCloudlButton () {
        this.EnterpriseCloudlButton.click();
    };
    get EnterpriseServerlButton() {
        return $('[href^="https://enterprise.github.com/trial"]');
    };
    clickEnterpriseServerlButton () {
        this.EnterpriseServerlButton.click();
    };
    get UserNameofEnterpriceCloud() {
        return $('[id="user_login"]');
    };
    setUserNameofEnterpriceCloud (value) {
        this.UserNameofEnterpriceCloud.addValue(value);
    };
    get EmailofEnterpriceCloud() {
        return $('[id="user_email"]');
    };
    setEmailofEnterpriceCloud (value) {
        this.EmailofEnterpriceCloud.addValue(value);
    };
    get PasswordofEnterpriceCloud() {
        return $('[id="user_password"]');
    };
    setPasswordofEnterpriceCloud (value) {
        this.PasswordofEnterpriceCloud.addValue(value);
    };
    get NameofEnterpriceServer() {
        return $('[id="contact_request_name"]');
    };
    setNameofEnterpriceServer (value) {
        this.NameofEnterpriceServer.addValue(value);
    };
    get CompanyofEnterpriceServer() {
        return $('[id="contact_request_organization_name"]');
    }; 
    setCompanyofEnterpriceServer (value) {
        this.CompanyofEnterpriceServer.addValue(value);
    };
    get WorkEmailofEnterpriceServer() {
        return $('[id="contact_request_email"]');
    };
    setWorkEmailofEnterpriceServer(value) {
        this.WorkEmailofEnterpriceServer.addValue(value);
    };
    get PhoneofEnterpriceServer() {
        return $('[id="contact_request_phone"]');
    };
    setPhoneofEnterpriceServer(value) {
    this.PhoneofEnterpriceServer.addValue(value);
    };
    get EnterpriceServerButton() {
        return $('[id="contact_request_instance_type_gcp"]');
    };
    clickEnterpriceServerButton () {
        this.EnterpriceServerButton.click();
    };
    get EnterpriceServerButton1() {
        return $('[id="questions_yes"]');
    };
    clickEnterpriceServerButton1 () {
        this.EnterpriceServerButton1.click();
    };
    get Textarea() {
        return $('[id="questions-list"]');
    };
    setTextarea(value) {
        this.Textarea.addValue(value);
    };
    get LastCheckbox() {
        return $('[id="contact_request_agreed_to_terms"]');
    };
    clickLastCheckbox () {
        this.LastCheckbox.click();
    };
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
      this.OpenButton .click()
    }
    get BSButton () {
    return $("//button//span[contains(text(),'Business Systems') ]")
    }
    get DesignButton () {
    return $("//button//span[contains(text(),'Design') ]")
    }
    get EngineeringButton () {
    return $("//button//span[contains(text(),'Engineering') ]")
    }
    get ExecutiveButton () {
    return $("//button//span[contains(text(),'Executive') ]")
    }
    get FinanceButton () {
    return $("//button//span[contains(text(),'Finance') ]")
    }
    get LegalButton () {
    return $("//button//span[contains(text(),'Legal') ]")
    }
    get MarketingButton () {
    return $("//button//span[contains(text(),'Marketing') ]")
    }
    get OperationsButton () {
    return $("//button//span[contains(text(),'Operations') ]")
    }
    get SalesButton () {
    return $("//button//span[contains(text(),'Sales') ]")
    }
    get SecurityButton () {
    return $("//button//span[contains(text(),'Security') ]")
    }
    get SupportButton () {
    return $("//button//span[contains(text(),'Support') ]")
    }
    };
    module.exports = new PageObj1();