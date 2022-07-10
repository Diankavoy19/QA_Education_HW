class PageObj1 {
    get UserName() {
        return $('[id="id_registration_full-name"]');
    };
    setUserName (value) {
        this.UserName.addValue(value);
    };
    get Email() {
        return $('[id="id_registration_email"]');
    };
    setEmail (value) {
      this.Email.addValue(value);
    };
    get Password() {
      return $('[id="id_registration_password"]');
    };
    setPassword (value) {
      this.Password.addValue(value);
    };
    get SubmitButton() {
      return $('//*[@type="submit"]');
    };
    clickSubmitButton () {
      this.SubmitButton.click();
    };
};
module.exports = new PageObj1();