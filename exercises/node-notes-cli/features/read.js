module.exports = data => {
  const notes = data.notes;
  for (const property in notes) {
    console.log(`${property}: ${notes[property]}`);
  }
};
