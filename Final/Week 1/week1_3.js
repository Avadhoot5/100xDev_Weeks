// Async functions

const { resolve } = require("path");

// Stop Watch - 

let counter = 0;

function stopWatch() {
    console.clear();
    counter++;
    console.log(counter);
}

// setInterval(stopWatch, 1*1000);

function testing() {
    for (var i = 1; i <= 5; i++) {
        function x(n) {
            setTimeout(() => {
            console.log(n);
        }, n * 1000);
        }
        x(i);
    }
}

// testing();

// function med1() {
//     console.log('Med 1 received');
//     setTimeout(med2, 2000);
// }

// setTimeout(med1, 1000);

// function med2() {
//     console.log('Med 2 received');
// }


function med1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('med 1 after 2 seconds');
        }, 2000);
    })
}


med1().then((resp) => {
    console.log(resp);
})











