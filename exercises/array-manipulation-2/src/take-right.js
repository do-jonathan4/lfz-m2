/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  var index = array.length - count;
  if (array.length > count) {
    for (let i = index; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
