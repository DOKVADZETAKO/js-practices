class Validator{
    constructor(){

    }

}





var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+995 557 02 04 65')); // it can be format of your country