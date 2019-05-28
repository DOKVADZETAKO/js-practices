var arr = [6, 5, 8, 11, 10];

for (i = 0; i < i - 1 ; i++){
    for( j = 1; j < i; j++){
        if(arr[i] > arr [j]){
            arr[i] = arr [j];
            arr[j] = arr[i];
        }
    }
}
console.log(arr);

