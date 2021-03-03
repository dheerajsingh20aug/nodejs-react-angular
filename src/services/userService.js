import HttpStatus from 'http-status-codes';
import mysql from 'mysql';
import pool from '../config/db/mysql';

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getUser(id) {  
	try{
		return new Promise((resolve, reject) => {
			pool.getConnection((err,db) => {
				const sql = 'select * from users where id = ' + mysql.escape(id);
				let user = {};
				db.query(sql, function(err,rows) {
					if(rows && rows.length > 0) {
						user = rows[0];									
					} 
					resolve(user);
					db.release();					
					if(err) {
						reject(err);
					}
				});
			});
		}).catch( (err) => { 
			reject(err);
		});
	} catch(err) {
		reject(err);
	}

}

/**
 * Get a users.
 *
 * @param   {Number|String}  username
 * @returns {Promise}
 */
export function getUsers(username) {  
	try{
		return new Promise((resolve, reject) => {
			pool.getConnection((err,db) => {
				let sql = 'select * from users';
				if(username) {
					sql += ' where username like ' + mysql.escape('%'+username);
				}
				db.query(sql, function(err,rows) {
					resolve(rows);	
					db.release();
					if(err) {
						reject(err);
					}
				});
			});
		}).catch( (err) => { 
			reject(err);
		});
	} catch(err) {
		reject(err);
	}

}
/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function login(username, password) {  
	try{
		return new Promise((resolve, reject) => {
			pool.getConnection((err,db) => {
				const sql = 'select * from users where username = ' + mysql.escape(username);
				let user = {};
				db.query(sql, function(err,rows) {
					if(rows && rows.length > 0) {
						user = rows[0];									
					} 
					resolve(user);
					db.release();
				});

				if(err) {					
					reject(err);
				}
			});			
		}).catch( (err) => { 
			reject(err);			
		});
	} catch(e) {
		reject(e);
	}

}