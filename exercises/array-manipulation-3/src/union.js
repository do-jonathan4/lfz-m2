/* exported union */
function union(first, second) {
  const secondArr = second.filter(x => first.indexOf(x) === -1);

  const newArr = first.concat(secondArr);
  return newArr;
}
