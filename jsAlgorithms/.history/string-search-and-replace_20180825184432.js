function customReplace(str, searchString, replaceString) {
	function applyCasing(source, target) {
		for (let i = 0; i < Math.min(source.length, target.length); i++) {
			target[i] = /A-Z/g.test(souce[i])
				? target[i].toUpperCase()
				: target[i].toLowerCase();
		}
		return target;
	}

	return str.replace(searchString, applyCasing(searchString, replaceString));
}

customReplace('A lazy fox jumped over crazy frog', 'jumped', 'High Jumped');
