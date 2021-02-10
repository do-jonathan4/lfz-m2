/* exported omit */
function omit(source, keys) {
  const newObj = {};
  const srcKeys = [];

  for (const prop in source) {
    srcKeys.push(prop);
  }

  const newKeys = srcKeys.filter(x => keys.indexOf(x) === -1);

  for (let i = 0; i < newKeys.length; i++) {
    newObj[newKeys[i]] = source[newKeys[i]];
  }

  return newObj;
}
