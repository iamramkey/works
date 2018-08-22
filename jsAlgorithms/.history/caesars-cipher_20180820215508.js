function rot13Basic(str) {
  return str
    .split("")
    .map(function(char) {
      var x = char.charCodeAt(x);
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      } else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      return String.fromCharCode(x - 13);
    })
    .join("");
}

function rot13Intermediate(str) {
  var rotCharCodeArray = [];
  var regExp = /[A-Z]/;
  str = str.split("");
  for (var x in str) {
    if (regExp.test(str[x])) {
      //A more general approach
      //possible because of modular arthimetic
      //and cyclic nature of rot13 transform
      rotCharCodeArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      rotCharCodeArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharCodeArray);
  return str;
}

function rot13(str){
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt() % 26) + 65));
}

console.log(rot13("LBH QVQ VG!"));
