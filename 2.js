// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
  const strX = x.toString();
  const reverseInt = strX.split("").reverse().join("");
  return strX === reverseInt;
};

var result = isPalindrome(121);
console.log(result);
