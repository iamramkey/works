function slasher(arr,howMany){
    return arr.slice(howMany);
}


console.log(slasher([1,2,3,4,5,6,7,8,9,10,11],3));
console.log(slasher([1,2,3,4,5,6,7,8,9,10,11],5));
console.log(slasher([1,2,3,4,5,6,7,8,9,10,11],7));
console.log(slasher([1,2,3,4,5,6,7,8,9,10,11],9));