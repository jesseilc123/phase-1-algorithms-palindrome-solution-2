function isPalindrome(word) {
  for(let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i
    if(word[i] !== word[j]){ 
      return false;
    }
  }
  return true;
}
/* 
make a function that returns true if a word is a palindrome. That means if the 
first letter is the same as last letter, and the second letter is the same
as the second to last letter, etc. until we reach the middle, return true.
/* 

/* 
  Add your pseudocode here

  iterate from the beginning of the string to the middle 
    check each letter to the correponding letter from the end
      if any letters don't match, return false

  if we reach the middle, and all the letters match, return true 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;
