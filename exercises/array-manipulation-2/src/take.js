/* exported take */
function take(array, count) {
  var newArray = [];
  if (count < array.length) {
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
