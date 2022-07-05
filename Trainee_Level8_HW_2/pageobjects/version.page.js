class VersionPage {
    get editButton() {
        return $('[href="/docs/versions.html"]')
    }

    clickEditButton () {
        this.editButton.click()
    }
}

module.exports = new VersionPage()