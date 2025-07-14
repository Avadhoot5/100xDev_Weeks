/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 1 second');
        }, 1000);
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 second');
        }, 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 3 second');
        }, 3000);
    })
}


async function calculateTime() {
    const startTime = Date.now();
    await waitOneSecond();
    await waitTwoSecond();
    await waitThreeSecond();
    const endTime = Date.now();
    const totalTime = (endTime - startTime)/1000;
    console.log('Time it took for all 3 promises to resolve',  totalTime)
}

calculateTime();
