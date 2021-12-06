function rangeSum(a, b, step){
    var numbers = [];
    sum=0;
    step = typeof step !== 'undefined' ?  step : 1;
    for (var i = a; i <= b; i+= step) {
    numbers.push(i);
    sum+=i;
    }
console.log(numbers);
console.log(sum);
}
rangeSum(1,10,2)