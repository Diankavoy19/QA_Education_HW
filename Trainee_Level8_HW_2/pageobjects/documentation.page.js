class DocumentationPage {
    get editButton() {
        return $('a[href="https://v5.webdriver.io/"]');
    };
    clickEditButton () {
        this.editButton.click();
    };
};
module.exports = new DocumentationPage();