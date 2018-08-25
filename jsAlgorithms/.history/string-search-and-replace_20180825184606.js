function customReplace(str, searchString, replaceString) {
	function applyCasing(source, target) {
		for (let i = 0; i < Math.min(source.length, target.length); i++) {
			target[i] = /A-Z/g.test(source[i])
				? target[i].toUpperCase()
				: target[i].toLowerCase();
		}
		return target;
	}

	console.log(applyCasing(searchString, replaceString));

	return str.replace(searchString, applyCasing(searchString, replaceString));
}

console.log(
	customReplace('A lazy fox jumped over crazy frog', 'jumped', 'High Jumped')
);
