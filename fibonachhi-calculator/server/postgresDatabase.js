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

module.expoert.dbQuery = function (query) {
	const pgClient = connect();
	pgClient.query(query ? query : 'CREATE TABLE IF NOT EXISTS values(number INT)').catch((err) => {
		return console.log(err);
	});
};
