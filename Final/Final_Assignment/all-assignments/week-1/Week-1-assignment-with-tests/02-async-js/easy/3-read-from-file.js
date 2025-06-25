// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

function reading() {
    try {
        fs.readFile('./test.txt', 'UTF-8', (err, data) => {
            if (!err) 
                console.log(data);
        })
    } catch (err) {
        console.log('File not read');
    }
}

let ctr = 0;
for (let i = 0; i < 100000000; i++) {
    ctr += 1;
}

reading();

console.log(ctr);
