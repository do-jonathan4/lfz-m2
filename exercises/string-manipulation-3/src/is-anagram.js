/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const firstArr = [];
  const secondArr = [];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === ' ') continue;
    firstArr.push(firstString[i]);
    firstArr.sort();
  }
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] === ' ') continue;
    secondArr.push(secondString[i]);
    secondArr.sort();
  }

  if (firstArr.join('') === secondArr.join('')) {
    return true;
  }
  return false;
}
