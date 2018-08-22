function diffArraysBaisc(first, second) {
  var diffArr = [];
  pushDiffFromFirstArray(first, second, diffArr);
  pushDiffFromFirstArray(second, first, diffArr);
  return diffArr;
}

function pushDiffFromFirstArray(first, second, diffs) {
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      diffs.push(first[i]);
    }
  }
}

console.log(diffArrays([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));
