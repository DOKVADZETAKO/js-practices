class MyString {
    constructor() {

    }

    reverse(str) {
        let nStr = "";
        for (var i = str.length - 1; i >= 0; i--) {
            nStr += str[i];
        }
        return nStr;
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        let assd = str.toLowerCase().split(" ")
        for (let i = 0; i < assd.length; i++) {
            assd[i] = assd[i].charAt(0).toUpperCase() + assd[i].substring(1);
        }
        return assd.join(" ")
    }
}

const str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'