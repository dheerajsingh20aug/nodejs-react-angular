exports.Child = `type Child {
	id: Int,
	name: String,
	email: String	
}`;

exports.ChildQueries = `
child(id: Int!) : Child
children(name: String): [Child]
`;
