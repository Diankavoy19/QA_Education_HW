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
}

module.exports = new PageObj()