/* exported flatten */
function flatten(array) {
  const newArr = array.reduce((acc, val) => acc.concat(val), []);
  return newArr;
}
