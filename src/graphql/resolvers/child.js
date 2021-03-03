const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as childService from '../../services/childService';
	
var getChild = async (args) => {
	const id = args.id;
	const child = await childService.getChild(id);	
	if (child) {
		return child;		
	} else {
		throw new Error('Child does not exist!');
	}
}

var getChildren = async (args) => {
	const name = args.name;
	const children = await childService.getChildren(name);	
	if (children && children.length ) {
		return children;		
	} else {
		throw new Error('Children not found!');
	}
}



// Root Resolver
module.exports = {
	child : async (args, req) => {	
		try{
			const child = await getChild(args);
			return child;
		} catch(err) {
			throw err;
		}
	},
	children: async (args, req) => {		
		try{
			const children = await getChildren(args);
			return children;
		} catch(err) {
			throw err;
		}			
	},
	
};