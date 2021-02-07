/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  if (length < string.length) {
    var newIndex = string.length - length;
    for (var i = newIndex; i < string.length; i++) {
      newString += string[i];
    }
  }
  if (length > string.length) {
    newString += string;
  }
  return newString;
}
