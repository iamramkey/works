function chunkArrayIntoGroups(arr,size){
    var temp = [];
    var res = [];
    for(var i = 0;i < arr.length ;i++){
        if(i % size !== (size - 1)){
            temp.push(arr[i]);
        }else{
            temp.push(arr[i]);
            res.push(temp);
            temp = [];
        }
    }
    if(temp.length > 0){
        res.push(temp);
    }
    return res;
}

console.log(chunkArrayIntoGroups([1,2,3,4,5,6,7,8,9,10,11], 2));