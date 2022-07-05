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
    get Password() {
        return $('[id="id_registration_password"]');
      }
    
      setPassword (value) {
        this.Password.addValue(value);
      }
      get SubButton() {
        return $('[class="sign-form__btn button_with-loader "]')
    }

      clickSubButton () {
        this.SubButton.click()
    }
    
}

module.exports = new PageObj1()