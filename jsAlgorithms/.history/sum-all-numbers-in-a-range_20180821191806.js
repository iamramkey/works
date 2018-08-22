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

Find the sum of the first 40 terms of the arithmetic sequence 2,5,8,11,⋯
First find the 40 th term: 
a40 = a1 + (n − 1) * d => 2 + (39 * 3) = 119 

Then find the sum:
Sn = n * ( a1 + an ) / 2 => S40 = 40 * ( 2 + 119 ) / 2 = 2420

for example : a1 = 1, an = 5;
a5 = 1 + ( 5 - 1 ) * 1;
a5 = 1 + 4
a5 = 5

S5 = 5 * ( 1 + 5 ) / 2;
S5 = 5 * 6 / 2;
S5 = 30 / 2;
S5 = 15;



here we have an & a1 so we need to calculate n & Sn


*/

console.log(sumAll([1,4]));
console.log(sumAll([5,2]));