function endingWith(str,lastChar){
    return str.slice(-lastChar.length) === lastChar;
}
endingWith('rama','a');