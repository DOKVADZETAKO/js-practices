const arr = [1,2,3];

var forEach = function(arr, cb ){
    if(!(Array.isArray(arr))){
        throw new Error ('First parameter required and has to be only array');
    }

    if(!(typeof cb === 'function')){
        throw new Error ('Second parameter required and has to be only function');
    }

    for(var count = 0; count < arr.length; count++){
        cb(arr[count], count , arr)
    }
}


forEach(arr, function(item, i, arr) {
    console.log(item);
    console.log(i);
    console.log(arr);
});