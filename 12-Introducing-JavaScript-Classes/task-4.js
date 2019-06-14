class MyString {
    constructor() {

    }

    reverse(reverseStr) {
        let nStr = "";
        for (var i = reverseStr.length - 1; i >= 0; i--) {
            nStr += reverseStr[i];
        }
        return nStr;
    }

    ucFirst(capStr) {
        let without =  capStr.substring(1);
        let first = capStr.charAt(0).toUpperCase();
        return first + without;
    }

    ucWords(words){
        let word = words.split(" ")
        for(let i = 0; i < word.length; i++){
            word[i] = this.ucFirst(word[i])
        }
        return word.join(" ")
    }
}

const str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abCde abcde abcde')); // print 'Abcde Abcde Abcde'