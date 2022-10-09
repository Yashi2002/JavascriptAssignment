// find largest in an array guven as the parameter
large = (num) =>{
    let largest = num[0]
    for(let i =0; i<num.length; i++)
    {
        if(num[i]>largest){
            largest = num[i];
        }
    }
    return largest;
}
console.log(large([1,2,3,4]))