function diffArrays(first, second) {
  var diffArr = [];
  pushDiffFromFirstArray(first,second,diffArr);
  pushDiffFromFirstArray(second,first,diffArr);
  return diffArr;
}

function pushDiffFromFirstArray(first, second, diffs) {
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      diffs.push(first[i]);
    }
  }
}
