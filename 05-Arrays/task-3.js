var every = function(arr, cb){
    if(!(Array.isArray(arr))){
        throw new Error ('First parameter required and has to be only array');
    }

    if(!(typeof cb === 'function')){
        throw new Error ('Second parameter required and has to be only function');
    }

    let eachValue = false;
    for(var count = 0; count < arr.length; count++){
        eachValue = cb(arr[count], count , arr);
        if(!eachValue){
            break;
        }
    }
    return eachValue;
}

const arr = [1,2,3];

let check = every(arr, function(item, i, arr) {
    return item > 1;
});

console.log(check);


