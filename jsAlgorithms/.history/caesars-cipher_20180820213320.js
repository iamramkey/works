function rot13Basic(str) {
  return str
    .split("")
    .map(function(char) {
      var x = char.charCodeAt(x);
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      } else if(x < 78){
        return String.fromCharCode(x + 13);
      }
      return String.fromCharCode(x - 13);
    })
    .join("");
}


function rot13(str){
    var rotCharCodeArray = [];
    var regExp = /[A-Z]/;
    str = str.split('');
    for(var x in str){
        if(regExp.test(str[x])){
            //A more general approach
            //possible because of modular arthimetic
            //and cyclic nature of rot13 transform
            rotCharCodeArray.push(str[x]);
        }
    }
}

console.log(rot13("LBH QVQ VG!"));
