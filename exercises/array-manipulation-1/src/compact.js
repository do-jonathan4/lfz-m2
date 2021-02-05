/* eslint-disable no-unused-vars */
function compact(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
