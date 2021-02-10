/* exported defaults */
function defaults(target, source) {
  const targetKeys = [];
  const srcKeys = [];

  for (const prop in target) {
    targetKeys.push(prop);
  }
  for (const prop in source) {
    srcKeys.push(prop);
  }

  const defaultKeys = srcKeys.filter(x => targetKeys.indexOf(x) === -1);

  for (let i = 0; i < defaultKeys.length; i++) {
    target[defaultKeys[i]] = source[defaultKeys[i]];
  }
}
