/* exported getKeys */
function getKeys(object) {
  var newArray = [];
  for (var prop in object) {
    newArray.push(prop);
  }
  return newArray;
}
