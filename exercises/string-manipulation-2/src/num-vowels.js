/* exported numVowels */
function numVowels(string) {
  var numOfVowels = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a') {
      numOfVowels++;
    }
    if (string[i].toLowerCase() === 'e') {
      numOfVowels++;
    }
    if (string[i].toLowerCase() === 'i') {
      numOfVowels++;
    }
    if (string[i].toLowerCase() === 'o') {
      numOfVowels++;
    }
    if (string[i].toLowerCase() === 'u') {
      numOfVowels++;
    }
  }
  return numOfVowels;
}
