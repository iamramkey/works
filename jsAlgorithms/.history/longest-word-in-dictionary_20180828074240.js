/*
https://leetcode.com/problems/longest-word-in-dictionary/description/

Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].

*/

var words = ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'];

var sortedWords = words.sort();

console.log(sortedWords);

var longest = '';
for (var i = 0; i < sortedWords.length - 1; i++) {
	var current = sortedWords[i] || '';
	var next = sortedWords[i + 1] || '';
	if (
		typeof next === 'string' &&
		typeof current === 'string' &&
		next.toString().startsWith(current) > -1
	) {
		longest = next;
	}
}
