function truncateString(str,num){
    str.length > num ? str.slice(0, num > 3 ? num -3 : num) + '...' : str;
}

console.log(truncateString('this is rama',3));
console.log(truncateString('this is rama',6));
console.log(truncateString('this is rama',9));
console.log(truncateString('this is rama',12));