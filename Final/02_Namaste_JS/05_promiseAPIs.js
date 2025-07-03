// Promise APIs

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 1 resolved');
        reject('Promise 1 Failed');
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 2 resolved');
        reject('Promise 2 Failed');
    }, 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Promise 3 resolved');
        reject('Promise 3 Failed');
    }, 1000)
})

// 1. Promise.ALL 
// Promise.all([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))

// 2. Promise.allSettled()

// Promise.allSettled([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))

// 3. Promise.race()

// Promise.race([p1, p2, p3])
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err))

// 4. Promise.any() 

Promise.any([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))

