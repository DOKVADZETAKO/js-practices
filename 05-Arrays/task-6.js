const reduceRight = function(arr, cb, acc){
    if(!(Array.isArray(arr))){
        throw new Error ('First parameter required and has to be only array');
    }

    if(!(typeof cb === 'function')){
        throw new Error ('Second parameter required and has to be only function');
    }

    if(!(typeof acc === 'number' || typeof acc === 'string' )){
        throw new Error ('Third parameter required and has to be only string or number');
    }

    let eachValue = acc;

    for (let i = arr.length - 1; i >= 0; i--){
        eachValue = cb(eachValue, arr[i], i , arr);
    }
    return eachValue;
}

const arr = [1,2,3];
const acc = 0;
const check = reduceRight(arr, function(acc, item, i, arr) {
    return item + acc;
}, acc);

console.log(check);

