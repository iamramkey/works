String.prototype.replaceAt = function(index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

function titleCase(str){
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for(var st in newTitle){
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0,newTitle[st].charAt(0));
    }
    return updatedTitle.join(' ');
}


console.log(titleCase('A lazy frog jumps over blazing deer'));