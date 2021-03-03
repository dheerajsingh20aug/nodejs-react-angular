import Joi from '@hapi/joi';

// import validate from '../utils/validate';
// import * as userService from '../services/userService';

// Validation schema
const schema = Joi.object({
  name: Joi.string()
    .label('Name')
    .max(90)
    .required()
});

/**
 * Validate create/update user request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function userValidator(req, res, next) {
  return next();
}

/**
 * Validate users existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function findUser(req, res, next) {
	return next();
}

export { findUser, userValidator };
