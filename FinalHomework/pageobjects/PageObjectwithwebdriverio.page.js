class PageObj1 {
    get TypeScriptButton() {
        return $('[href*="TypeScript"]');
    };
    clickTypeScriptButton () {
    this.TypeScriptButton.click();
    };
    get TypeScriptURLButton() {
    return $('[href="/webdriverio/webdriverio"]');
    };
    clickTypeScriptURLButton () {
    this.TypeScriptURLButton.click();
    };
};
module.exports = new PageObj1();