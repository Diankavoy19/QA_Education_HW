class PastVersionPage {
    get editButton() {
        return $('li a[href="#past-versions"]');
    };
    clickEditButton () {
        this.editButton.click();
    };
};
module.exports = new PastVersionPage();