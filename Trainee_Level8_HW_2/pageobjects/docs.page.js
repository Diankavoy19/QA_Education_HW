class DocsPage {
    get editButton() {
        return $('.slidingNav [href$="gettingstarted.html"]');
    };
    clickEditButton () {
        this.editButton.click();
    };
};
module.exports = new DocsPage();