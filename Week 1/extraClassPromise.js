// Write a function 'higherorder' that takes a cb fn as an argument. inside 'higherOder', call the cb fn synchronously.

// function fn() {
//     console.log("function passed as an argument");
// }

// function higherOrder(fn) {
//     fn();
// }

// higherOrder(fn);

// Write a function 'higherOrderAsync' that takes a cb fn as an argument. Inside 'higherOrderAsync', call the cb fn asynchronously using setTimeout
// after a delay of n seconds, where n is current day of the month according to UTC time (1<=n<=31).

// function cb() {
//     console.log("called asynchronously");
// }

// function higherOrderAsync(cb) {
//     let n = new Date().getDate();
//     setTimeout(cb, n * 1000);
// }

// higherOrderAsync(cb);

// Implement a function 'mapArray' that takes an array and a cb fn as arguments. 'mapArray' should apply the cb fn to each element of the array
// and return a new array with the modified values

// let array = [2,51,3,5,19,81];

// function cb(n) {
//     return n*n;
// }

// function mapArray(array, cb) {
//     let finalArray = array.map((value) => cb(value));
//     return finalArray;
// }

// console.log(mapArray(array, cb));

// Write a func 'filterArray' that takes an array and a callback func as arguments. 'filterArray' should filter the elements of the array based on the condition specified by the cb fn and return a new array with the filtered elements.

// let array = [2,51,3,5,19,81];

// function filterArray(array) {
//     return array.filter((value) => value%2 != 0);
// }

// console.log(filterArray(array));

// WAF 'readFileCallback' that takes a filename and a cb fn. 'readFileCallback' should read the contents of the file asynchronously and pass the data to the cb fn.

// new.txt

// const fs = require('fs');

// function cb(err, content) {
//     if (err) {console.log("file not read")}
//     console.log(content);
// }

// function readFileCallback(fileName, cb) {
//     fs.readFile(fileName, "UTF-8", cb);
// }

// readFileCallback("new.txt", cb);

// Implement a fn 'parallelFileOperation' that returns an array of size 2 with the first index containing the contents of the file 'a.txt' in UTF8 encoding. If 'a.txt' doesn't exist, then throw an error. The second element of the array contains 1 if the text 'Hello!' is successfully written to the file 'b.txt' and 0 if the write operation fails.

// const fs = require('fs');

// function parallelFileOperation() {
//     let ans = [];
//     let count = 0;

//     function readFile(err, data) {
//         if (err) {throw Error}
//         ans[0] = data;
//         count++;
//         if (count === 2) {
//             console.log(ans);
//         }
//     }
    
//     function writeFile(err) {
//         if (err) {
//             ans[1] = 0;
//         } else {
//             ans[1] = 1;
//         }
//         count++;
//         if (count === 2) {
//             console.log(ans);
//         }
//     }

//     fs.readFile("new.txt","UTF-8", readFile);
//     fs.writeFile("b.txt", 'Hello', "UTF-8", writeFile);
// }

// parallelFileOperation();

// create a func 'series' that sequentially does the following

// 1. Read the contents of 'a.txt' using utf8 encoding.
// 2. wait for 3 seconds.
// 3. write the contents of 'a.txt' in 'b.txt'
// 4. remove any extra spacing from 'a.txt'
// 5. delete the contents of 'a.txt'
// 6. delete the contents of 'b.txt'

// const fs = require('fs');

// function series() {
//     fs.readFile('new.txt', "utf-8", waitCallback);
// }

// function waitCallback(err, data) {
    
//     function writeCb() {
//         fs.writeFile("b.txt", data, "UTF-8", removeSpace)
//     }
//     function removeSpace(data) {
//         let newData = extraSpaces(data);
//         fs.writeFile('a.txt', newData, 'UTF-8', removeA)
//     }

//     function removeA() {
//         fs.writeFile('a.txt', '', "UTF-8", removeB);
//     }
//     function removeB() {
//         fs.writeFile('b.txt', '', "UTF-8", ()=> console.log("Sucess"));
//     }

//     function extraSpaces() {
//         let arr = data.split(" ");
//         let newArr = [];
//         for (let i of arr) {
//             if (i.length < 1) {}
//             else {
//                 newArr.push(i);
//             }
//         }
//         console.log(newArr.join(" "));
//         return newArr.join(" ");
//     }
//     setTimeout(writeCb, 3000);
// }

// series();
