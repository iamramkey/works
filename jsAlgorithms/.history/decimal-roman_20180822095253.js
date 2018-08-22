function decimalToRomanBasic(num) {
  var decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanValues = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  var romanStr = "";

  for (var i = 0; i < decimalValues.length; i++) {
    while (num >= decimalValues[i]) {
      romanStr += romanValues[i];
      num -= decimalValues[i];
    }
  }
  return romanStr;
}


function decimalToRoman(num){

  var romans = ['I'];

}


console.log(decimalToRoman(36));
console.log(decimalToRoman(108));
