const express = require('express');
const path = require('path');
const app = express();

const directory = path.join(__dirname, 'public');
const files = express.static(directory);

app.use(files);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
