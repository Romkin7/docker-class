const { Pool } = require('pg');

function connect() {
	const pgClient = new Pool({
		user: process.env.PGUSER,
		host: process.env.PGHOST,
		database: process.env.PGDATABASE,
		password: process.env.PGPASSWORD,
		port: process.env.PGPORT,
	});
	pgClient.on('error', () => {
		return console.log('Error wit Postgres database connection!');
	});
	return pgClient;
}

module.exports.dbQuery = async function (query, arr) {
	const pgClient = connect();
	if (arr) {
		const response = await pgClient.query(query, arr);
		return response;
	} else {
		const response = await pgClient.query(query ? query : 'CREATE TABLE IF NOT EXISTS seenIndexes(number INT)');
		return response;
	}
};
