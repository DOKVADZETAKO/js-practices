let a = 3;
console.log(isEven (a));
function isEven (a){
    if(typeof a != 'number'){
        throw new Error('parameter type is not a Number');
    }
    return a % 2 == 0;
}

