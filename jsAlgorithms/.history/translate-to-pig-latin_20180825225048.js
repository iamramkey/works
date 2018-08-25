/*
Basically, the Pig Latin system used here works as follows:

Words that start with a vowel (A, E, I, O, U) simply have "WAY" appended to the end of the word.
Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word (as opposed to just the first consonant letter), and "AY" is appended.
     ('Y' is counted as a vowel in this context)
*/
function toPigLatinBasic(string) {
	let vowelRegExp = /[aeiou]/gi;
	let pigLatin = '';

	if (string[0].match(vowelRegExp)) {
		pigLatin = string + 'way';
	} else {
		let vowelIndex = string.indexOf(string.match(vowelRegExp)[0]);
		pigLatin = string.slice(vowelIndex) + string.substr(0, vowelIndex) + 'ay';
	}
	return pigLatin;
}

function toPigLatinIntermediate(string) {
	function getVowelIndex(str, i) {
		if (i >= str.length) {
			return str.length;
		}
		return ['a', 'e', 'i', 'o', 'u'].indexOf(str[i]) === -1
			? getVowelIndex(str, i + 1)
			: i;
	}

	return (
		string
			.slice(getVowelIndex(string, 0))
			.concat(
				getVowelIndex(string, 0) === 0
					? 'w'
					: string.substr(0, getVowelIndex(string, 0))
			) + 'ay'
	);
}

function toPigLatin(string) {
	function isConsonant(char) {
		return !/[aeiou]/gi.test(char);
	}

	//return string + 'way if the first character is vowel
	//else convert string to array & push all the consonants to end of the array & concatenate 'ay' and return it
	if (!isConsonant(string[0])) {
		return string + 'way';
    }
    let i = 0;
    let nextString = '';
    while(isConsonant(string[i] && i <= string.length){
        nextString = string[i];
        i++;
    }
    return string.slice(i) + nextString + 'ay';
}

/* console.log(`Enter the English text here that you want translated into
Pig Latin. This is accomplished via this HTML document and
accompanying JavaScript program. Note that hyphenated words
are treated as two words. Words may consist of alphabetic
characters only (A-Z and a-z). All punctuation, numerals,
symbols and whitespace are not modified.`); */

console.log(toPigLatin('hyphntd'));
console.log(toPigLatin('Enter'));
console.log(toPigLatin('translated'));
