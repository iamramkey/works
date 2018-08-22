function getInsPosition(array,num){
    array.sort((a,b) => a > b);
    let index = array.findIndex(e => num < e);
    return index === -1 ? array.lemgth : index;
}

console.log(getInsPosition([1,3,5,7,9,11,13], 10));