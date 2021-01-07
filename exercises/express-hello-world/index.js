const express = require('express');
const app = express();

app.use(function (req, res, next) {
  console.log(req.method);
  res.send('Hello');
  next();
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
