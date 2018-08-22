function rot13(str) {
  return str
    .split("")
    .map(function(char) {
      var x = char.charCodeAt(x);
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      } else if(){
        return String.fromCharCode(x + 13);
      }
      return String.fromCharCode(x - 13);
    })
    .join("");
}

console.log(rot13("LBH QVQ VG!"));
