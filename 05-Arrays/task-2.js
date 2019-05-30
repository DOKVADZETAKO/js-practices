

var filter = function(arr, cb){
    if(!(Array.isArray(arr))){
        throw new Error ('First parameter required and has to be only array');
    }

    if(!(typeof cb === 'function')){
        throw new Error ('Second parameter required and has to be only function');
    }

    let filtered = [];
    for(var count = 0; count < arr.length; count++){
        const old = arr[count];
        const xd = cb(old, count , arr);
        if(xd){
            filtered.push(old);
        }
    }
    return filtered;

}

const arr = [1,2,3];
let filtered = filter(arr, function(item, i, arr) {
    return item > 1;
});

console.log(filtered);