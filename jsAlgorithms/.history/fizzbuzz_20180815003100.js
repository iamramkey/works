function fizzbuzz(n){
    for(let i = 1 ;i < n ; i++){
        let str = "";
        if(i % 3 === 0){
            str += "fizz"
        }
        if(i % 5 === 0){
            str += "buzz"
        }
        str = str || i;
        console.log(str);
    }
}

fizzbuzz(16);