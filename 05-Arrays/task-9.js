const arrayFill = function(afs, cb){
    if(!((typeof afs === 'number') || (typeof afs === 'string') ||(typeof afs === 'array'))){
        throw new Error ('First parameter required and has to be only number, string, object array');
    }

    if(!(typeof cb === 'number')){
        throw new Error ('Second parameter required and has to be only number');
    }

    let eachValue = [];

    for(let count = 0; count < cb; count++){
        eachValue.push(afs);
    }
    return eachValue;
}


const check = arrayFill('x',5);

console.log(check);
