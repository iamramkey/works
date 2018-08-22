String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character.toUpperCase() + this.substr(index + character.length)
  );
};

function titleCaseBeginner(str){
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for(var st in newTitle){
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0,newTitle[st].charAt(0));
    }
    return updatedTitle.join(' ');
}

function titleCaseIntermediate(str){
    return str.split(' ').map(function(word){
        return word.replaceAt(0,word.charAt(0));
    }).join(' ');
}

function titleCase(str){
    return str.toLowerCase().replace(/(^|\s)\S/)
}


console.log(titleCase('A lazy frog jumps over blazing deer'));