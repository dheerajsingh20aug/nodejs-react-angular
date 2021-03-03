const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as userService from '../../services/userService';
	
var getUser = async (args) => {
	const id = args.id;
	const user = await userService.getUser(id);	
	if (user) {
		return user;		
	} else {
		throw new Error('User does not exist!');
	}
}

var getUsers = async (args) => {
	const username = args.username;
	const users = await userService.getUsers(username);	
	if (users && users.length ) {
		return users;		
	} else {
		throw new Error('User does not exist!');
	}
}


var authenticate = async (args) => {
	if(args.username && args.password) {
		const username = args.username;
		const password = args.password;			
		const user = await userService.login(username, password);	
		if (!user) {
      throw new Error('User does not exist!');
		}
		// generate hash password
		// var hash = bcrypt.hashSync(password, 12);
		// console.log(hash);
		const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('Password is incorrect!');
		}
	  const token = jwt.sign(
      { id: user.id, email: user.email },
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return {id:1, token:token, tokenExpiration:1}
	} else {
		throw new Error('Username and Password can not be blank!');
	}
}

// Root Resolver
module.exports = {
	user : async (args, req) => {	
		try{
			const user = await getUser(args);
			return user;
		} catch(err) {
			throw err;
		}
	},
	users: async (args, req) => {		
		try{
			const users = await getUsers(args);
			return users;
		} catch(err) {
			throw err;
		}			
	},
	login: async (args, req) => {		
		try{
			const user = await authenticate(args);
			return user;
		} catch(err) {
			throw err;
		}		
	}
};