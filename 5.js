// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

var lengthOfLastWord = function (s) {
  s = s.trim();
  const arr = s.split(" ");
  return arr[arr.length - 1].length;
};

var output = lengthOfLastWord("Hello World");
console.log(output);
