/* exported reverseWords */
function reverseWords(string) {
  const strArr = string.split(' ');
  const newArr = [];

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i].split('').reverse().join('');
    newArr.push(word);
  }

  return newArr.join(' ');
}
