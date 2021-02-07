/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (var prop in object) {
    newArray.push(object[prop]);
  }
  return newArray;
}
