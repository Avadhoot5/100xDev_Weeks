
// READING from a file

console.log('Start');

const fs = require('fs');

function sum(n) {
    let ans = 0;
    for (let i = 1; i <=n ; i++) {
        ans += i;
    }
    console.log(ans);
}


function read(err, data) {
    sum(data);
    console.log('File is read');
}


sum(100000);

fs.readFile('test.txt', 'UTF-8', read)

sum(100000);

console.log('END');











































































































