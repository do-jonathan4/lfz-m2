/* exported intersection */
function intersection(first, second) {
  const newArr = first.filter(x => second.includes(x));
  return newArr;
}
