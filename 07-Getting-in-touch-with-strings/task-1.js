let str = 'pitter';

function upperCaseFirst(str) {
    if (typeof str != 'string') {
        throw new Error('parameter isn\'t string')
    } else {
        let fitstlatter = str.charAt(0);
        fitstlatter = fitstlatter.toUpperCase();
        let other = str.substring(1);
        let result = fitstlatter + other;
        return result;
    }  
}

console.log(upperCaseFirst('pitter'));














