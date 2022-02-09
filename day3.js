function swap(arr){
for(var i = 0; i < arr.length;i++){
    for(var x = i + 1; x < arr.length;x++){
    if(arr[i] > arr[x] ){
        [arr[i], arr[x]] = [arr[x], arr[i]]
    }
}
}
console.log(arr)
}


swap([2,4,3,1,5])