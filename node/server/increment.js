const add_total = require('./add');
const fs = require('fs');

// const result = add_total.add(2, 9);
// console.log(result);

fs.readFile('people.json', 'utf-8', function (err, data) {
  console.log(data, err);
  const result = JSON.parse(data);
  console.log(result);
});