const http = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

/// Skips the threadpool and uses the OS for the request
const request = () => {
    http.request('https://google.com', (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(Date.now() - start);
        })
    }).end();
}

/// Uses the threadpool
const hashTheStuff = () => {   
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () =>  {
        console.log('hash', Date.now() - start);
    })
}

request();

/// Requests stats about the file first and then gets the contents
/// of the file.
fs.readFile('multitask.js', 'utf-8', () => {
    console.log('FS: ', Date.now() -start);
})

hashTheStuff()
hashTheStuff()
hashTheStuff()
hashTheStuff()