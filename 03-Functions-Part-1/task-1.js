let a = 2;
function f(a){
    if(typeof a != 'number'){
        throw new Error('parameter type is not a Number');
    }

    return a ** 3;
    
}
console.log(f(a));

