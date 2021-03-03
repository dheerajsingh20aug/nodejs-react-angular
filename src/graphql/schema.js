var {buildSchema} = require('graphql');
const userSchemas = require("./schemas/user");
const childSchemas = require("./schemas/child");
module.exports = buildSchema(`
	${userSchemas.User}	
	${userSchemas.AuthData}
	${childSchemas.Child}	

	type RootQuery {
		${userSchemas.UserQueries}
		${childSchemas.ChildQueries}
	}
	
	schema {
		query:RootQuery
	}
		
`);