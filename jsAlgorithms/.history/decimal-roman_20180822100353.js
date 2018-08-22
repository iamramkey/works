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

function decimalToRoman(num) {
  var romans = ["I", "V", "X", "L", "C", "D", "M"],
    ints = [],
    romanNumber = [],
    numeral = "";

  while (num) {
    ints.push(num % 10);
    num = Math.floor(num / 10);
  }

  for (var i = 0; i < ints.length; i++) {
    units(ints[1]);
  }

  function units() {
    numeral = romans[i * 2];
    switch (ints[i]) {
      case 1:
      case 2:
      case 3:
        var arr = [];
        arr.length = ints[i];
        arr.fill(numeral);
        romanNumber.push(arr.toString());
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[(i * 2) + 1]));
        break;
    }
  }
}

console.log(decimalToRoman(36));
console.log(decimalToRoman(108));
