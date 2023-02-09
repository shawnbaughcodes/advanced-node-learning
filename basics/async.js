const http = require('https');
const start = Date.now();

const request = () => {
    http.request('https://google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(Date.now() - start);
        })
    }).end();
}

request();
request();
request();
request();
request();