function countChar(str, symb)
{
    var length = str.length; 
    count = 0;                        
    for(n=0; n<length; n++)
    {
        var c = str.charAt(n);              
        if(c==symb)                  
        count++;
        }
    return count;
}
console.log(countBs('BoBs BoB', 'B'));