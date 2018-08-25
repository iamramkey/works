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

function decimalToRomanAdvanced(num) {
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

  //loop through each digit, starting with the ones place
  for (var i = 0; i < str.length; i++) {
    //Make a roman numeral that ignores 5 multiples & shortening rules
    finalStr = romans[i][0].repeat(str[i]) + finalStr;

    //Check for a roman numeral 5-multiple version
    if (romans[i][1]) {
      //Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
      finalStr = finalStr
        .replace(
          romans[i][1] + romans[i][0].repeat(4),
          romans[i][0] + romans[i + 1][0]
        )
        //shorten occurrences of 4 * 10^i
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
    }
  }
  return finalStr;
}

function decimalToRoman(num) {
  var romans = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
  var str = num
    .toString()
    .split("")
    .reverse();
  var final = "";
  for (var i = 0; i < str.length; i++) {
    /* 
    final = final
      .replace(romans[i][0].repeat(5), romans[i][1])
      .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1])
      .replace(romans[i][1].repeat(2), romans[i + 1][0]); */
    let str1 = "";
    if (str[i] > 5 && romans[i][1]) {
      str1 += romans[i][1];
      str[i] -= 5;
    }
    if (str[i] > 0) {
      str1 += romans[i][0].repeat(str[i]);
    }
    final = str1 + final;
    final = final
      .replace(
        romans[i][1] + romans[i][0].repeat(4),
        romans[i][0] + romans[i + 1][0]
      )
      .replace(romans[i][0].repeat(4), romans[i][0] + romans[i + 1][0]);
  }

  return final;
}

console.log(decimalToRoman(34));
console.log(decimalToRoman(108));
