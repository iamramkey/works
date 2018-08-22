function longestWord(s,max){
    /* return (s || '').toString().split(' ').reduce(function(max, curr){
        return max < curr.length ? curr.length : max;
    },0) */
    if(s.length > 0){
        let len = s.indexOf(' ');
        if(len > max){
            max = len;
        }
        return longestWord(s.slice(s.indexOf(' ')),max);
    }
    return max;
    
}

console.log(longestWord("A lazy fox Jumps over Lazy Dog"));