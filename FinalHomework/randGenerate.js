class RandGenerate{
     makeid(length) {
         var result = '';
         var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         var symbolsLength = symbols.length;
         for ( var i = 0; i < length; i++ ) {
             result += symbols.charAt(Math.floor(Math.random() * symbolsLength));
            }
            return result;
        }
        getEmail(){
            const address = ["mail.ru", "list.ru", "rambler.ru", "yandex.ru", "gmail.com"];
            var string = this.makeid(6);
            var string2 = this.makeid(6);
            const string1 = address[Math.floor(Math.random() * address.length)];
            return string + string2 + "@" + string1;
        }
        makePass(length) {
            var result1 = '';
            var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var symbolsLength = symbols.length;
            for ( var i = 0; i < length; i++ ) {
                result1 += symbols.charAt(Math.floor(Math.random() * symbolsLength));
            }
            return result1;
        }
        makePhone(length) {
            var result2 = '';
            var symbols1 = '0123456789';
            var symbolsLength1 = symbols1.length;
            for ( var i = 0; i < length; i++ ) {
                result2 += symbols1.charAt(Math.floor(Math.random() * symbolsLength1));
            }
            return result2;
        }

}

module.exports = new RandGenerate();