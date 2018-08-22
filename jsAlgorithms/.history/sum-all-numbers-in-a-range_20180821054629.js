function sumAll(arr){
    var min = Math.min(arr[0],arr[1]);
    var max = Math.max(arr[0],arr[1]);
    var sum = 0;
    for(var i = min ; i <= max; i++){
        sum += i;
    }
    return sum;
}


console.log(sumAll([1,4]));
console.log(sumAll([5,2]));