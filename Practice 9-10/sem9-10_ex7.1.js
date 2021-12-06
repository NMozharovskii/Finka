function ArrayReverse(arr){
    var i;
    var reversed = [];
    for (i = arr.length-1; i>=0; i--){
        reversed.push(arr[i])
    } 
    console.log(reversed)   

}
ArrayReverse([1,2,3,4,5])