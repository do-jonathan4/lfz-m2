/* exported equal */
function equal(first, second) {
  const abs = Math.max(first.length, second.length);

  for (let i = 0; i < abs; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
