function mutate(arr){
    var s = [];
    arr.sort(function(a,b){
        console.log(a,b);
        s.push(a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) > -1);
    });
    return s;
}


console.log(mutate(["hello world","hello"]));
