class Validator {
    isEmail(email) {
        if (email.indexOf("@")) {
            let spliting = email.split('@').pop();
            if (spliting.indexOf(".")) {
                return true;
            }
        } else {
            return false;
        }
    }
 
    isDomain(domain) {
        let arr = ['.net'], resulttrue;
        for (let i = 0; i < arr.length; i++) {
            if (domain.indexOf(arr[i]) !== -1) {
                resulttrue = true;
            } else {
                resulttrue = false;
            }
        }
        return resulttrue;
    }
 
    isDate(date) {
        if (date.indexOf('.') === 2 && date.lastIndexOf('.') === 5 && date.substring(0, 2) <= 31 && date.substring(3, 5) <= 12) {
            return true;
        } else {
            return false;
        }
    }
 
    isPhone(num) {
        let str1 = num.substring(0, 4);
        let str2 = num.substring(4);
        let number = str2.replace(/[^0-9]/g, "").length;
        return (str1.indexOf('+995') === 0 && number === 9) ? true : false;
    }
 }
 
 var validator = new Validator();
 
 console.log(validator.isEmail('jshtml@mail.ru'));
 console.log(validator.isDomain('jshtml.net'));
 console.log(validator.isDate('31.12.2020'));
 console.log(validator.isPhone('+995 577 52 52 55')); // it can be format of your country