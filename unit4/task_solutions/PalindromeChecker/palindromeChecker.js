/* 
 * This program determines if the words in text boxes are palindromes
 * Intro to Programming
*/

// 
alert("Welcome to Palindrome Checker. You will be asked to enter two words."+
	"\nThe program will then determine if the words are palindromes.");
var word1 = prompt("Enter the first word:");
var word2 = prompt("Enter the second word:");
// 
var textBox1 = document.getElementById("word1");
var textBox2 = document.getElementById("word2");
// 
textBox1.value = word1;
textBox2.value = word2;
// 
displayMessage("Please enter two words and press the button.");


// 
function displayMessage(message) {
    // 
	var response = document.getElementById("response");
	// 
	response.innerHTML = message;
}

// 
function checkPalindrome() {
	// 
	var textBox1 = document.getElementById("word1");
	var textBox2 = document.getElementById("word2");
	// 
	var word1 = textBox1.value;
	var word2 = textBox2.value;
	// 
	var palindrome = isPalindrome(word1, word2);

	// 
	if(palindrome) {
		displayMessage("Congratulations. The words are palindromes.");
	} else {
		displayMessage("Sorry. The words are not palindromes");
	}
}

// 
function isPalindrome(w1, w2) {

	if(isSameLength(w1, w2)) {
		// 
		for (var i=0; i<w1.length; i++) {
			// 
			if(w1[i] != w2[w2.length-1-i]) {
				// 
				return false;
			}
		}
		// 
		return true;
	} else {
		// 
		return false;
	}
}

// 
function isSameLength(w1, w2) {
	if(w1.length == w2.length) {
		// 
		return true;
	} else {
		// 
		return false;
	}
}	