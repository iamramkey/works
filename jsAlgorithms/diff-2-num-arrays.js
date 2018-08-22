function diffArraysBaisc(first, second) {
  var diffArr = [];
  pushDiffFromFirstArray(first, second, diffArr);
  pushDiffFromFirstArray(second, first, diffArr);
  return diffArr;
}

function diffArraysIntermediate(first, second) {
  return first
    .concat(second)
    .filter(i => !first.includes(i) || !second.includes(i));
}

function diffArraysAdvancedSolution1(first, second) {
  return first
    .filter(i => !second.includes(i))
    .concat(second.filter(i => !first.includes(i)));
}

function diffArrays(first, second) {
  var diffArr = [];
  var orderedAndMergedArray = first.concat(second).sort((a, b) => a - b);
  for (var i = 0; i < orderedAndMergedArray.length; i++) {
    if (
      orderedAndMergedArray[i] !== orderedAndMergedArray[i - 1] &&
      orderedAndMergedArray[i] !== orderedAndMergedArray[i + 1]
    ) {
      diffArr.push(orderedAndMergedArray[i]);
    }
  }
  return diffArr;
}

function pushDiffFromFirstArray(first, second, diffs) {
  for (let i = 0; i < first.length; i++) {
    Î;
    if (second.indexOf(first[i]) === -1) {
      diffs.push(first[i]);
    }
  }
}

console.log(diffArrays([1, 2, 3, 5, 7], [1, 2, 3, 4, 5, 8, 9]));
