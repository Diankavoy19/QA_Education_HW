class PageObj1 {
    get UserName() {
        return $('[id="id_registration_full-name"]');
    }

    setUserName (value) {
        this.UserName.addValue(value);
    }

    get Email() {
        return $('[id="id_registration_email"]');
    }
  
    setEmail (value) {
      this.Email.addValue(value);
    }
    get EmailSign() {
      return $('[id="id_login_email"]');
    }
    setEmailSign (value) {
      this.EmailSign.addValue(value);
    }
    get EmailReset() {
      return $('[id="id_reset_email"]');
    }
    setEmailReset (value) {
      this.EmailReset.addValue(value);
    }
    clickEmailReset () {
      this.EmailReset.click()
  }
    get Password() {
        return $('[id="id_registration_password"]');
      }
    
      setPassword (value) {
        this.Password.addValue(value);
      }
      get PasswordSign() {
        return $('[id="id_login_password"]');
      }
    
      setPasswordSign (value) {
        this.PasswordSign.addValue(value);
      }
      get SubButton() {
        return $('[class="sign-form__btn button_with-loader "]')
    }

      clickSubButton () {
        this.SubButton.click()
    }
    get ForgotButton() {
      return $('[id="ember644"]')
  }

    clickForgotButton () {
      this.ForgotButton.click()
  }
  get SbrositButton() {
    return $('[class="sign-form__btn button_with-loader "]')
}

  clickSbrositButton () {
    this.SbrositButton.click()
}
get PlanButton() {
  return $("//a[contains(text(),'Plans') and @class ] ")
}

clickPlanButton () {
  this.PlanButton.click()
}
get ProductButton() {
  return $("//summary[contains(text(),'Product') and @class ] ")
}
get EnterpriseButton() {
  return $("//nav//ul//li//a[contains(text(),'Enterprise') and @href ]   ")
}
get ExploreButton() {
  return $("//summary[contains(text(),'Explore') and @class ] ")
}
clickExploreButton () {
  this.ExploreButton.click()
}
get MarketplaceButton() {
  return $("//nav//ul//li//a[contains(text(),'Marketplace') and @href ] ")
}
get PricingButton() {
  return $("//summary[contains(text(),'Pricing') and @class ] ")
}
get FreeButtoninPlans() {
  return $('[test_selector="plan-input-free"]')
}
clickFreeButtoninPlans () {
  this.FreeButtoninPlans.click()
}
get UserNameinGithub() {
  return $('input[name="user[login]"]');
}

setUserNameinGithub (value) {
  this.UserNameinGithub.addValue(value);
}
get EmailinGithub() {
  return $('input[name="user[email]"]');
}

setEmailinGithub (value) {
  this.EmailinGithub.addValue(value);
}
get PasswordinGithub() {
  return $('input[name="user[password]"]');
}

setPasswordinGithub (value) {
  this.PasswordinGithub.addValue(value);
}
get CheckboxinGithub() {
  return $('input[name="all_emails"]');
}

clickCheckboxinGithub () {
  this.CheckboxinGithub.click()
}
get ExploreGithubButton() {
  return $("//a[contains(text(),'Explore GitHub') and @class ]")
}

clickExploreGithubButton () {
  this.ExploreGithubButton.click()
}
get TopicsButton() {
  return $('[data-selected-links="topics_path /topics/ /topics"]')
}

clickTopicsButton () {
  this.TopicsButton.click()
}
get TopicsLabel() {
  return $('//h1[text()="Topics"]')
}
get TSButton() {
  return $('[href="/search?l=TypeScript&q=webdriverio&type=Repositories"]')
}

clickTSButton () {
  this.TSButton.click()
}
get TSURLButton() {
  return $('[href="/webdriverio/webdriverio"]')
}

clickTSURLButton () {
  this.TSURLButton.click()
}
get StartFreeTrialButton() {
  return $('[href="/webdriverio/webdriverio"]')
}

clickStartFreeTrialButton () {
  this.StartFreeTrialButton.click()
}
get StartFreeTrialButtonofthemainPage() {
  return $('[data-test-selector="start-trial-button"]')
}

clickStartFreeTrialButtonofthemainPage () {
  this.StartFreeTrialButtonofthemainPage.click()
}
get EnterpriseCloudlButton() {
  return $('[class="rounded-3 px-2 pt-5 pb-2 pricing-recommended-plan"]')
}

clickEnterpriseCloudlButton () {
  this.EnterpriseCloudlButton.click()
}
get EnterpriseServerlButton() {
  return $('[class="rounded-3 px-2 pt-5 pb-2"]')
}

clickEnterpriseServerlButton () {
  this.EnterpriseServerlButton.click()
}
get UserNameofEnterpriceCloud() {
  return $('[id="user_login"]');
}

setUserNameofEnterpriceCloud (value) {
  this.UserNameofEnterpriceCloud.addValue(value);
}
get EmailofEnterpriceCloud() {
  return $('[id="user_email"]');
}

setEmailofEnterpriceCloud (value) {
  this.EmailofEnterpriceCloud.addValue(value);
}
get PasswordofEnterpriceCloud() {
  return $('[id="user_password"]');
}

setPasswordofEnterpriceCloud (value) {
  this.PasswordofEnterpriceCloud.addValue(value);
}
get NameofEnterpriceServer() {
  return $('[id="contact_request_name"]');
}

setNameofEnterpriceServer (value) {
  this.NameofEnterpriceServer.addValue(value);
}
get CompanyofEnterpriceServer() {
  return $('[id="contact_request_organization_name"]');
}

setCompanyofEnterpriceServer (value) {
  this.CompanyofEnterpriceServer.addValue(value);
}
get WorkEmailofEnterpriceServer() {
  return $('[id="contact_request_email"]');
}

setWorkEmailofEnterpriceServer(value) {
  this.WorkEmailofEnterpriceServer.addValue(value);
}
get PhoneofEnterpriceServer() {
  return $('[id="contact_request_phone"]');
}

setPhoneofEnterpriceServer(value) {
  this.PhoneofEnterpriceServer.addValue(value);
}
get ESButton() {
  return $('[id="contact_request_instance_type_gcp"]')
}

clickESButton () {
  this.ESButton.click()
}
get ESButton1() {
  return $('[id="questions_yes"]')
}

clickESButton1 () {
  this.ESButton1.click()
}
get Textarea() {
  return $('[id="questions-list"]');
}

setTextarea(value) {
  this.Textarea.addValue(value);
}
get LastCheckbox() {
  return $('[id="contact_request_agreed_to_terms"]')
}

clickLastCheckbox () {
  this.LastCheckbox.click()
}
}

module.exports = new PageObj1()