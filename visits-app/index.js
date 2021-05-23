const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get("/", (req, res) => {
    // process.exit(0);
    client.get('visits', (err, visits) => {
        if(err) {
            return new Error(err);
        } else {
            res.send(`Visits count is ${visits}`);
            client.set('visits', parseInt(visits) + 1);
            return;
        }
    })
});

app.listen(8081, (err) => {
    if(err) {
        throw Error;
    } else {
        console.log('Visits server started on port 8081...');
    }
});
