const redis = require('redis');
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    retry_strategy: () => 1000
});
module.exports = redisClient;

const redisPulisher = redisClient.duplicate();
module.exports = redisPulisher;
