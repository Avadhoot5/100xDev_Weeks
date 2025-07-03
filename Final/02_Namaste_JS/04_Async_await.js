// Async await - JS

// async fn always returns a promise 

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved value');
    }, 2000);
})

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise resolved value');
    }, 4000);
})

// handling promises using async await V/S then()

async function handlePromise() {
    console.log('async FN started');
    const result = await p;
    console.log(result);
    console.log('async FN ended');

    console.log('async FN started 1');
    const result2 = await p1;
    console.log(result2);
    console.log('async FN ended 1');
}

console.log('Before calling Promise');
handlePromise();
console.log('After calling Promise');




function getData() {
    console.log('getData FN started');
    p.then((res) => {
        console.log(res);
    });
    console.log('getData FN ended');
}

// getData();

































