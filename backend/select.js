var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'sampleDB'
});

connection.connect(function(error) {
  if(!!error) {
    console.log('Error');
  } else {
    console.log('Connected');
  }
});

var id = 1;

connection.query('select * from articles where id = ?', id, function(err, result) {
  console.log(result);
});
