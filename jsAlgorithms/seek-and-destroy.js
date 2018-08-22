function seekAndDestroy(arr,arr1){
    return arr.filter(function(item){
        return arr1.indexOf(item) === -1;
    });
}

console.log(seekAndDestroy([1,2,3,4,5,6,7,8,9,10],[2,34,5,43,37,10]));