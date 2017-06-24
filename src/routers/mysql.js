// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '111111',
//     database:'crud'
// });

// // connection.connect();
// // //查询
// // connection.query('SELECT * FROM `table1`', function(err, rows, fields) {
// //     if (err) throw err;
// //     console.log('The solution is: ', JSON.stringify(rows));
// // });
// // //关闭连接
// // connection.end();

// function connect(connection,str){
//     connection.connect();
//     connection.query(str, function(err, rows) {
//         if (err) throw err;
//         console.log('The solution is: ', JSON.stringify(rows));
//     });
//     connection.end();
// }

// connect(connection,"SELECT * FROM `table1`")