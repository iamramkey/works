function customReplace(str, searchString, replaceString) {
	function applyCasing(source, target) {
		let returnStr = [];
		for (let i = 0; i < Math.min(source.length, target.length); i++) {
			returnStr[i] = /A-Z/g.test(source[i])
				? target[i].toUpperCase()
				: target[i].toLowerCase();
		}
		returnStr = returnStr + replaceString.slice(returnStr.length);
		return returnStr.join('');
	}

	console.log(applyCasing(searchString, replaceString));

	return str.replace(searchString, applyCasing(searchString, replaceString));
}

console.log(
	customReplace('A lazy fox jumped over crazy frog', 'jumped', 'High Jumped')
);
