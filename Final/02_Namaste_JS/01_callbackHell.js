// callback hell
// inversion of control

const cart =['shoes', 'pants', 'kurta'];


api.createOrder(cart, function proceedToPayment() {
    console.log('proceed to pay');
})

// pyramid of doom 

setTimeout(() => {
    console.log('hello');
    setTimeout(() => {
        console.log('hello2');
    }, 3000);
}, 2000);
