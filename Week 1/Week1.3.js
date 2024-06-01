
// let counter = 0;

// for (let i = 0; i < 100000000; i++) {
//     counter = counter + 1;
// }

// console.log(counter);

// the file which needs to be read, can be modified, renamed, etc. So this will make the thread wait until the file contents are accessible for the JS code
// let fileContent = readFile("./access.txt");

// readFile("./value.txt", function(content) {
//     console.log(contents);
// });

// meanwhile the JS thread is waiting for above, the below code won't run, and this is bad.

// Below is a Long-running task
// function printToScreen() {
//     console.log("hello world");
// }

// setTimeout(printToScreen, 3 * 1000);

// // The thread can execute the below code while the above long running task takes time
// let counter = 0;
// for (let i = 0; i < 10000; i++) {
//     counter = counter + 1;
// }
// console.log(counter);



//// Promise Code -

// function getMedicine() {
//     return new Promise((resolve) => {
//         setTimeout(resolve, 2000);
//     })
// }

// getMedicine().then(() => console.log("hello after 2 second"));

// let counter = 1;
// function stopWatch() {
//     console.clear();
//     console.log(counter);
//     counter += 1;
// }
// setInterval(stopWatch, 1000);

// Tasks -
// Assig 1 - Easy, Med, Hard.

