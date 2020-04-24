const express = require('express');
const os = require("os");
const app = express();
app.get('/me', function (req, res) {
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        res.send(os.hostname() + " " + add);
      })
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});