class PageObj {
    get UserName() {
        return $(' [id="name"]');
    };
    setUserName (value) {
        this.UserName.addValue(value);
    };
    get Email() {
        return $('[id="email"]');
    };
    setEmail (value) {
      this.Email.addValue(value);
    };
    get Password() {
        return $('[id="password"]');
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
module.exports = new PageObj();