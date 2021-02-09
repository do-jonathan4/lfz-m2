/* exported chunk */
function chunk(array, size) {
  var newArray = [];

  for (var i = 0; i < array.length; i += size) {
    var subArray = [];
    for (var j = 0; j < size; j++) {
      if (j + i >= array.length) {
        continue;
      }
      subArray.push(array[j + i]);
    }
    newArray.push(subArray);
  }
  return newArray;
}
