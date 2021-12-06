let i = 1, counter =0;
var even='', odd='';
while (i<=8){
    if (i%2==0){
        even += '     ';
        odd += '#';
    } else if (i%2!=0) {
        even += '#';
        odd += '     ';
    }
    i++;
}
while (counter<=3){
    console.log(even);
    console.log(odd);
    counter++;
}