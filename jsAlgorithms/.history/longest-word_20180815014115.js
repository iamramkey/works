function longestWord(s, max) {
  /* return (s || '').toString().split(' ').reduce(function(max, curr){
        return max < curr.length ? curr.length : max;
    },0) */

  if (s.length > 0) {
    let len = s.indexOf(" ");
    if (len === -1) {
      len = s.length;
    }
    if (len > max) {
      max = len;
    }
    let next = s.slice(len + 1);
    if(next.length > 0){
        return longestWord(next, max);
    }
  }
  return max;
}

console.log(longestWord("A lazy fox Jumps over blazing deer",0));
