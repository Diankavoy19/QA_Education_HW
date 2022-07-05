class HelpPage {
    get editButton() {
        return $(' li a[href="/help.html"]')
    }

    clickEditButton () {
        this.editButton.click()
    }
}

module.exports = new HelpPage()