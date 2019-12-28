var a = [2, -7, -2, -2, 0]
for(var i = 0; i < a.length; i++){
    for(var j = 0; j < (a.length - i - 1); j++){
        var absI = Math.abs(a[j]);
        var absJ = Math.abs(a[j+1]);
        if((absI - absJ) === 0){
            if(a[j] > a[j+1]){
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            } 
        }else if(absI > absJ){
            var temp1 = a[j];
            a[j] = a[j+1];
            a[j+1] = temp1;
        }
    }
}
a