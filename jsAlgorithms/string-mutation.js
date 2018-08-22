function mutate(arr){
    return arr[1].toString().toLowerCase().split('').every(function(letter){
        return arr[0].toString().toLowerCase().indexOf(letter) > -1;
    });
}


console.log(mutate(["ehllo world","hello"]));
