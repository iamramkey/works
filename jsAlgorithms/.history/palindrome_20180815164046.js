function palindrome(str) {
  let front = 0;
  let back = str.length - 1;
  while (back > front) {
    while (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }
    while (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    if (
      str[front].toString().toLowerCase() !== str[back].toString().toLowerCase()
    ) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("abba"));
console.log(palindrome("racecar"));
console.log(palindrome("madam"));
