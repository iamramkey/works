const string = "Hello There!";
const chars = {};
let maxCharLength = 0;
let maxChar = {};

for (let char of string) {
  chars[char] = (chars[char] || 0) + 1;
  console.log(maxChar[maxCharLength] || []);
  if (maxCharLength < chars[char]) {
    maxCharLength = chars[char];
  }
  maxChar[maxCharLength] = (maxChar[maxCharLength] === undefined ? [] : maxChar[maxCharLength]).push(char);
}

console.log(maxCharLength);
console.log(maxChar);
