// creating a promise, chaining & error handling

const cart =['shoes', 'pants', 'kurta'];

const cartPromise = createOrder(cart);

function validateCart(cart) {
    return true;
}

function createOrder(cart) {
    // createOrder
    // validateCart
    // orderId

    const pr = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error('Cart is not valid');
            reject(err);
        }
        const orderId = '12345';
        if (orderId) {
            resolve(orderId);
        }
    })

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve('Payment Success!');
    })
}

cartPromise
    .then((orderId) => console.log(orderId))
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentStatus) => console.log(paymentStatus))
    .catch((err) => console.log(err.message))
    .then(()=> {console.log('No matter what happens, this will be called')})



