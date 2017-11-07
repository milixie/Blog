const express = require('express');
const app = express();
// app.set("view options", {layout: false});
const engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('../index.html');
});

app.listen(3000, () => {
  console.log('Express listen 3000');
});