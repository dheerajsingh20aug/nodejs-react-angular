exports.User = `type User {
	id: Int,
	username: String,
	email: String,
	password: String
}`;

exports.AuthData = `type AuthData {
  id: Int!
  token: String!
  tokenExpiration: Int!
}
`;

exports.UserQueries = `
user(id: Int!) : User
users(username: String): [User]
login(username: String, password: String): AuthData
`;
