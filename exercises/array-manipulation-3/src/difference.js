/* exported difference */
function difference(first, second) {
  const firstArr = first.filter(x => second.indexOf(x) === -1);
  const secondArr = second.filter(x => first.indexOf(x) === -1);

  const newArr = firstArr.concat(secondArr);
  return newArr;
}
