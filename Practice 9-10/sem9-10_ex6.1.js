function rangeSum(a, b){
    var numbers = [];
    sum=0;
    for (var i = a; i <= b; i++) {
    numbers.push(i);
    sum+=i;
    }
console.log(numbers);
console.log(sum);
}
rangeSum(1,4)
