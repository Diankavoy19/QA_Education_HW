class PageObj {
    get UserName() {
        return $(' [id="name"]');
    }

    setUserName (value) {
        this.UserName.addValue(value);
    }

    get Email() {
        return $('[id="email"]');
    }
  
    setEmail (value) {
      this.Email.addValue(value);
    }
    get Password() {
        return $('[id="password"]');
      }
    
      setPassword (value) {
        this.Password.addValue(value);
      }
      get SubButton() {
        return $('[class="_6dgzsvq css-1af0gyj"]')
    }

    clickSubButton () {
        this.SubButton.click()
    }
    get CareersButton() {
      return $('[href="/about/careers"]')
  }

  clickCareersButton () {
      this.CareersButton.click()
  }
  get OpenButton () {
    return $('[href="#positions"]')
}

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
get ProductButton () {
  return $("//button//span[contains(text(),'Product') ]")
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
}

module.exports = new PageObj()