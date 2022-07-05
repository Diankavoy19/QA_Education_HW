class APIPage {
    get editButton() {
        return $('li a[href="/docs/api.html"]')
    }

    clickEditButton () {
        this.editButton.click()
    }
}

module.exports = new APIPage()