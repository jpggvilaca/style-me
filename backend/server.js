var express = require('express');
// var mysql = require('mysql');
var app = express();
//
// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 8889,
//   user: 'root',
//   password: 'root',
//   database: 'sampleDB'
// });
//
// connection.connect(function(error) {
//   if(!!error) {
//     console.log('Error');
//   } else {
//     console.log('Connected');
//   }
// });

app.get('/', function (req, res) {
  res.send('Homepage');

  // connection.query('select * from users', function(err, result) {
  //   console.log(result);
  // });
});

app.get('/users', function(req, res) {
  res.send('Users');
})

app.listen(3300, function () {
  console.log('Example app listening on port 3300!')
});
