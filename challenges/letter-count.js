/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

*/

// YOUR CODE HERE
Object.size = function letterCount (obj) {
	var size = 0;
	for(var key in obj) {
		if(obj.hasOwnProperty(key))
    size++;
	}
	return size;
};

//initial vars
var str = prompt("Enter a word: ");
var letters = new Object;

//loop, figure it out
for(x = 0, length = str.length; x < length; x++) {
	var l = str.charAt(x).replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
	letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
}

//output count!
for(var key in letters) {
	console.log(key + ' :: ' + letters[key]);
}
console.log(Object.size(letters));
