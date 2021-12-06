function countBs(str)
{
    var length = str.length; 
    count = 0;                        
    for(n=0; n<length; n++)
    {
        var c = str.charAt(n);              
        if(c=="B" | c=="b")                  
        count++;
        }
    return count;
}
console.log(countBs("BBbeans Boby"));