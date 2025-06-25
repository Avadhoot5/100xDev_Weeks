// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


let contents = 'the contents are replaced with this text';

const fs = require('fs');

function writing() {
    try {
        fs.writeFile('test.txt', contents, 'UTF-8', (err) => {
            if (!err) 
                console.log('File written sucess!');
        })
    } catch (error) {
        console.log('Error in writing the contents to the file');
    }
}

writing();



