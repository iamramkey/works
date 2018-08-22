function falsyValueBouncer(arr){
    return arr.filter(Boolean);
}

console.log(falsyValueBouncer([0,1,2,3,false,4,null,5,'',6,undefined,7,NaN,8,]));