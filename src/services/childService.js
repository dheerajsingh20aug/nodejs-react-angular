import HttpStatus from 'http-status-codes';
import mysql from 'mysql';
import pool from '../config/db/mysql';

/**
 * Get a user.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getChild(id) {  
	try{
		return new Promise((resolve, reject) => {
			pool.getConnection((err,db) => {
				const sql = 'select * from users where id = ' + mysql.escape(id);
				let child = {};
				db.query(sql, function(err,rows) {
					if(rows && rows.length > 0) {
						child = rows[0];									
					} 
					resolve(child);
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
 * @param   {Number|String}  name
 * @returns {Promise}
 */
export function getChildren(name) {  
	try{
		return new Promise((resolve, reject) => {
			pool.getConnection((err,db) => {
				let sql = 'select * from users';
				if(name) {
					sql += ' where username like ' + mysql.escape('%'+name);
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
