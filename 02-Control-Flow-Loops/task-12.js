var arr = [2, 5, 9, 15, 0, 4];
var i;
for(i of arr){
    if (i > 3 && i < 10){
        console.log(i);
        i++
    }
}
