/* exported unique */
function unique(array) {
  const newArr = array.filter((x, index) => array.indexOf(x) === index);
  return newArr;
}
