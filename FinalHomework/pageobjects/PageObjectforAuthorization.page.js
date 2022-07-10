class PageObj2 {
  get EmailSign() {
    return $('[id="id_login_email"]');
  };
  setEmailSign (value) {
    this.EmailSign.addValue(value);
  };
  get EmailReset() {
    return $('[id="id_reset_email"]');
  };
  setEmailReset (value) {
    this.EmailReset.addValue(value);
  };
  clickEmailReset () {
    this.EmailReset.click();
  };
  get PasswordSign() {
    return $('[id="id_login_password"]');
  };
  setPasswordSign (value) {
    this.PasswordSign.addValue(value);
  };
  get SubmitButton() {
    return $('//*[@type="submit"]');
  };
  clickSubmitButton () {
    this.SubmitButton.click();
  };
  get ForgotButton() {
    return $('[href$="reset=true"]');
  }
  clickForgotButton () {
    this.ForgotButton.click();
  };
  get SbrositButton() {
    return $('//*[@type="submit"]');
  };
  clickSbrositButton () {
    this.SbrositButton.click();
  };
}

module.exports = new PageObj2() 