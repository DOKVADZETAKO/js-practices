let arr = ['abcd', 'abcde', 'ab', 'abc'];

const arrLength = arr.map(function(item){
    return item.length;
});

console.log( arrLength );