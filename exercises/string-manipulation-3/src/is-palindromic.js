/* exported isPalindromic */
function isPalindromic(string) {
  var str1 = '';
  var str2 = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') continue;
    str1 += string[i];
  }
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') continue;
    str2 += string[i];
  }

  if (str1 === str2) {
    return true;
  }
  return false;
}
