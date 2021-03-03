const userResolver = require("./resolvers/user");
const childResolver = require("./resolvers/child");
module.exports = {
	...userResolver,
	...childResolver
}


