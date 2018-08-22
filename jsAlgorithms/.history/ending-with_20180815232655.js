function endingWith(str,lastChar){
    return str.slice(-lastChar.length) === lastChar;
}
console.log(endingWith('rama','a'));