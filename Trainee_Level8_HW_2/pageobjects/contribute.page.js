class ContributePage {
    get editButton() {
        return $('.toc-headings a[href="#contribute"]');
    };
    clickEditButton () {
        this.editButton.click();
    };
};
module.exports = new ContributePage();