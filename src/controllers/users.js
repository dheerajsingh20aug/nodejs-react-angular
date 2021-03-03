import HttpStatus from 'http-status-codes';
import pool from '../config/db/mysql';

// db.query('SELECT ? FROM t_user',query, function(err, results, query) {
//     if (err) throw err;
//     if(!err) {
//         indexPage.receiveResults(results);
//     }
// });
import * as userService from '../services/userService';

/**
 * Get a user by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchById(req, res, next) {	
	const data = await userService.getUser(10);	
	res.send(data);	
}
