const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const error = require('./controller/error');
const router = require('./routes');
const db = require('./db');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'test express',
    message: 'hello express'
  });
});
app.use(router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('some thing broke');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(error.logger);
app.use(error.clientErrorHandler);
app.use(error.errorHandler);

app.listen(3000, () => {
  console.log('Express listen 3000');
});