process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster'); 
const { pbkdf2 } = require('crypto');
const Worker = require('webworker-threads').Worker;
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    pbkdf2('a', 'b', 100000, 512, 'sha512', () =>  {
        res.send({'hi': 'there'});
    })
});

app.get('/fast', (req, res) => {
    res.send({'that': 'was fast'});
})

app.listen(8000, () => {
    console.log('Running on port 8000');
});
