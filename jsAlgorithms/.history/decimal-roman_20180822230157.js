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

function decimalToRomanIntermediate1(num) {
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
    console.log("i : ", i);
    numeral = romans[i * 2];
    switch (ints[i]) {
      /* case 1:
      case 2:
      case 3:
      case 6:
      case 7:
      case 8:
        var arr = [];
        arr.length = ints[i];
        arr.fill(numeral);
        romanNumber.push(arr.toString());
        break; */
      case 1:
        romanNumber.push(numeral);
        break;
      case 2:
        romanNumber.push(numeral + numeral);
        break;
      case 3:
        romanNumber.push(numeral + numeral + numeral);
        break;
      case 4:
        romanNumber.push(numeral.concat(romans[i * 2 + 1]));
        break;
      case 5:
        romanNumber.push(romans[i * 2 + 1]);
        break;
      case 6:
        romanNumber.push(romans[i * 2 + 1] + numeral);
        break;
      case 7:
        romanNumber.push(romans[i * 2 + 1] + numeral + numeral);
        break;
      case 8:
        romanNumber.push(romans[i * 2 + 1] + numeral + numeral + numeral);
        break;
      case 9:
        romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
        break;
    }
  }
  return romanNumber
    .reverse()
    .join("")
    .toString();
}

function decimalToRoman(num) {
  var romans = [
    ["I", "V"], //10^0, 5 * 10^0
    ["X", "L"], //10^1, 5 * 10^1
    ["C", "D"], //10^2, 5 * 10^2
    ["M"] //10^3
  ];
  var str = num
    .toString()
    .split("")
    .reverse();
  var finalStr = "";

  //loop through each digit fr
  for (var i = 0; i < str.length; i++) {
    if(str[i] > 5){

    }else{

    }
  }
}

console.log(decimalToRoman(36));
console.log(decimalToRoman(108));
