function sumAll(arr){
    var min = Math.min(arr[0],arr[1]);
    var max = Math.max(arr[0],arr[1]);
    var sum = 0;
    for(var i = min ; i <= max; i++){
        sum += i;
    }
    return sum;
}


/*

arithmetic progression is the proper equivalent to this problem.
In arithemetic progression we will find the sum of given series by taking initial value & value at nth position.
if we dont know the value at nth position we will calculate using below formulae
a(n) = a1 + (n − 1) * d

a(n) => to find the value at nth position in a series. 
example series : 


*/

console.log(sumAll([1,4]));
console.log(sumAll([5,2]));