/* exported truncate */
function truncate(length, string) {
  var newString = '';
  if (length < string.length) {
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
  }
  if (length >= string.length) {
    for (let i = 0; i < string.length; i++) {
      newString += string[i];
    }
  }
  newString += '...';
  return newString;
}
