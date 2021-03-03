import mysql from 'mysql';
import settings from './settings';

var pool = mysql.createPool({
	connectionLimit : 100, //important
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'rainbow',
	insecureAuth: false
});

export default pool;