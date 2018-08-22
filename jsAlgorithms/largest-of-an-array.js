function largestNumberOfAnArrayIntermediate(arr){
    return arr.map(function(eachIndividualArray){
        return eachIndividualArray.reduce(function(max,item){
            return item> max?item : max;
        });
    });
}

function largestNumberOfAnArray(arr){
    return arr.map(Function.apply.bind(Math.max,null));
}

console.log(largestNumberOfAnArray([
    [4,345,1,897,79,6],
    [467,768,767,457,900,456],
    [253,808,456,807,456],
    [809,566,456,790,345]
]));