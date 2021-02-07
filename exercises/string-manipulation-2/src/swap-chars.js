/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  var firstLetter = string[firstIndex];
  var secondLetter = string[secondIndex];

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondLetter;
    } else if (i === secondIndex) {
      newString += firstLetter;
    } else {
      newString += string[i];
    }
  }
  return newString;
}
