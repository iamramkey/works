function repeatAStringNumOfTimes(str,num){
    return num > 0 ? str.repeat(num) : '';
}


console.log(repeatAStringNumOfTimes('rama',-1));
console.log(repeatAStringNumOfTimes('rama',6));