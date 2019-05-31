var reduceRight = function(arr, cb, acc){
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

    for(var count = 0; count > arr.length; count++){
        eachValue = cb(eachValue, arr[count], count , arr);
    }
    return eachValue;
}

const arr = [1,2,3];
const acc = 0;
let check = reduceRight(arr, function(acc, item, i, arr) {
    return item + acc;
}, acc);

console.log(check); ``` need check```