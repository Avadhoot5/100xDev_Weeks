// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

function clean(data) {
    let cleanedData = '';
    let arr = data.split(' ');
    for (let i of arr) {
        if (i == '') {
        } else cleanedData += i + ' ';
    }
    fs.writeFile('a.txt', cleanedData.trim(), 'UTF-8', (err) => {
        if (!err) console.log('File cleaned sucess!');
    })
}

function write() {
    fs.readFile('a.txt', 'UTF-8', (err, data) => {
        if (!err) 
            clean(data);
    })
}

write();
