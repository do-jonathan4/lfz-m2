/* exported drop */
function drop(array, count) {
  var newArray = [];
  if (array.length > count) {
    for (let i = count; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
