function longestWord(s){
    return (s || '').toString().split(' ').reduce(function(max, curr){
        return max < curr.length ? curr.length : max;
    },0)
}

cosnole.log(longestWord("A lazy fox Jumps over Lazy Dog"));