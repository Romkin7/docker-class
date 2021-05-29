const redis = require('redis');
const redisClient = redis.createClient({
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fibonachhi(index) {
	console.log(index);
	if (index < 2) {
		return 1;
	} else {
		return fibonachhi(index - 1) + fibonachhi(index - 2);
	}
}

sub.on('message', (channel, message) => {
	console.log(message)
	return redisClient.hset('values', message, fibonachhi(parseInt(message)));
});

sub.subscribe('insert');
