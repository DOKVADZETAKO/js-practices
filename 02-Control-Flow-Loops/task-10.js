let arr = [6, 5, 8, 11, 10];
let j;
for (num of arr){
    for( j = 0; j < arr.length; j++){
        if(arr[j] < arr [j+1]){
            temp = arr[j]
            arr[j] = arr [j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);
