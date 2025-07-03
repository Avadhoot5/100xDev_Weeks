// creating a promise, chaining & error handling

const cart = ['shoes', 'pants', 'kurta'];

// createOrder, proceedToPayment, showOrderSummary, updateWallet

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
        if (orderId) resolve(orderId);
    })
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId) resolve('Payment Success!');
        else {
            const err = new Error('Payment Failed');
            reject(err);
        }
    })
}

function showOrderSummary(paymentStatus) {
    return new Promise((resolve, reject) => {
        if (paymentStatus) resolve('Total amount: 500');
    })
}

function updateWallet(orderSummary) {
    return new Promise((resolve, reject) => {
        if (orderSummary) resolve('Balance amount: 0');
    })
}

cartPromise
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentStatus) => {
        console.log(paymentStatus);
        return showOrderSummary(paymentStatus);
    })
    .then((orderSummary) => {
        console.log(orderSummary);
        return updateWallet(orderSummary);
    })
    .then((balance) => console.log(balance))
    .then(()=> {console.log('No matter what happens, this will be called')})
    .catch((err) => console.log(err.message));
