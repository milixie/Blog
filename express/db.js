const sql = require('mysql');
const connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'exp'
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;