/* exported zip */
function zip(first, second) {
  const abs = Math.min(first.length, second.length);
  const newArr = [];

  for (let i = 0; i < abs; i++) {
    const subArr = [];
    subArr.push(first[i], second[i]);
    newArr.push(subArr);
  }
  return newArr;
}
