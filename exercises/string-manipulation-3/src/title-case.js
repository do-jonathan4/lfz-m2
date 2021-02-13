/* exported titleCase */
function titleCase(title) {
  const titleArr = title.split(' ');
  const newArr = [];

  for (let i = 0; i < titleArr.length; i++) {
    if (titleArr[i] === 'and' ||
      titleArr[i] === 'or' ||
      titleArr[i] === 'nor' ||
      titleArr[i] === 'but' ||
      titleArr[i] === 'a' ||
      titleArr[i] === 'an' ||
      titleArr[i] === 'the' ||
      titleArr[i] === 'as' ||
      titleArr[i] === 'at' ||
      titleArr[i] === 'by' ||
      titleArr[i] === 'for' ||
      titleArr[i] === 'in' ||
      titleArr[i] === 'of' ||
      titleArr[i] === 'on' ||
      titleArr[i] === 'per' ||
      titleArr[i] === 'to') {
      newArr.push(titleArr[i]);
    } else if (titleArr[i].toLowerCase() === 'javascript') {
      newArr.push('JavaScript');
    } else if (titleArr[i].toLowerCase() === 'javascript:') {
      newArr.push('JavaScript:');
    } else if (titleArr[i].toLowerCase() === 'api') {
      newArr.push('API');
    } else {
      let word = '';
      for (let j = 0; j < titleArr[i].length; j++) {
        if (j === 0) {
          word += titleArr[i][j].toUpperCase();
        } else {
          word += titleArr[i][j].toLowerCase();
        }
      }
      newArr.push(word);
    }
  }

  const newTitle = newArr.join(' ');
  let sentence = '';

  for (let i = 0; i < newTitle.length; i++) {
    if (newTitle[i - 2] === ':' ||
      newTitle[i - 1] === '-') {
      sentence += newTitle[i].toUpperCase();
    } else {
      sentence += newTitle[i];
    }
  }

  return sentence;
}
