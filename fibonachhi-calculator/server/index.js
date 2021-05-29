const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const redisClient = require('./redis');
const redisPulisher = require('./redis');
const app = express();
const { dbQuery } = require('./postgresDatabase');
dbQuery();

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);
app.use(cors());
app.use(bodyParser.json());

app.get('/values', async (req, res) => {
	try {
		const seenIndexes = await dbQuery('SELECT * from seenIndexes');
		let calculatedValues;
		redisClient.hgetall('values', (err, values) => {
			if (err) {
				return res.status(500).json({ err: err });
			}
			calculatedValues = values;
			return res.status(200).json({ seenIndexes: seenIndexes.rows, calculatedValues: calculatedValues });
		});
	} catch (err) {
		return res.status(500).json({ message: 'Something wend badly wrong!', err: err });
	}
});

app.post('/values', async (req, res) => {
	try {
		const index = req.body.index;
		if (parseInt(index) > 40) {
			return res.status(422).json({ message: 'Value is too high, please input value 40 or lower.' });
		} else {
			redisClient.hset('values', index, 'Nothing yet!');
			redisPulisher.publish('insert', index);
			await dbQuery('INSERT INTO seenIndexes(number) VALUES($1)', [index]);
			return res.status(201).json({ message: 'Successfully added your index: ' + index, working: true });
		}
	} catch (err) {
		return res.status(500).json({ message: 'Something wend badly wrong!' });
	}
});

app.listen(app.get('port'), app.get('ip'), (err) => {
	if (err) {
		throw Error;
	} else {
		console.log('Server is running on port 8080...');
	}
});
