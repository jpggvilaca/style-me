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

var article = {
  author: 'João'
};

var query = connection.query('insert into articles set ?', article, function(err, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
});
