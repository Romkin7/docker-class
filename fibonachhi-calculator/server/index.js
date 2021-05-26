const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const redisClient = require('./redis');
const redisPulisher = require('./redis');
const app = express();

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);
app.use(cors());
app.use(bodyParser.json());

app.get('/values', async (req, res) => {
	try {
		const values = await dbQuery('SELECT * from values');
		let calculatedValues;
		redisClient.hgetall('values', (err, values) => {
			return (calculatedValues = values);
		});
		return res.status(200).json({ seenIndexes: values, values: calculatedValues });
	} catch (err) {
		return res.status(500).json({ message: 'Something wend badly wrong!' });
	}
});

app.post('/values', async (req, res) => {
	try {
		const index = parseInt(req.body.index);
		if (index > 40) {
			return res.status(422).json({ message: 'Value is too high, please input value 40 or lower.' });
		} else {
			redisClient.hset('values', index, 'Nothing yet!');
			redisPulisher.publish('insert', index);
			pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);
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
