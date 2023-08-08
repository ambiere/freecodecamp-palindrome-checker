/**
 * Check if a string is a palindrome
 * @param {String} word
 * @returns {{isPalindrome: boolean, word: String}}
 * @version 0.1.0
 */

export default function checkIfPalindrome(word) {
  const copyOfTheWord = word.slice(0).toLowerCase();
  const specialChar = /[?=(\s+\W+_)]/gi;
  const cleanCopyOfTheWord = copyOfTheWord.replace(specialChar, "");
  const reversedCleanCopyOfTheword = cleanCopyOfTheWord.split("").reverse().join("");
  console.log("palindrome: ", reversedCleanCopyOfTheword);
  return {
    isPalindrome: cleanCopyOfTheWord === reversedCleanCopyOfTheword,
    checkedPalindrome: cleanCopyOfTheWord,
  };
}
