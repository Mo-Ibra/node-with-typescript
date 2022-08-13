import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-mysql-orm'
});

connection.connect();

// connection.end();

export default connection;