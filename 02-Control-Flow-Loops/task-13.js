var arr = [3, 5, -8, 5, -10];
var a = 0;
for (i of arr){
    if(i > 0){ 
        a = a + i
    }
    i++
}
console.log(a)

