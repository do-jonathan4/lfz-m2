/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (let i = 0; i < array.length - count; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
