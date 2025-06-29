//  Promises

const cart =['shoes', 'pants', 'kurta'];

createOrder(cart, function(orderID) {
    proceedToPayment(orderID, function(accountInfo) {
        showOrderSummary(accountInfo, function () {
            updateWalletBalance();
        })
    });
});


// showOrderSummary();
// updateWalletBalance();

const cartPromise = createOrder();

cartPromise
    .then((orderID) => {
        return proceedToPayment(orderID)})
    .then((accountInfo) => {
        return showOrderSummary(accountInfo)})
    .then(() => {
        return updateWalletBalance()})



// const GITHUB_URL = 'https://api.github.com/users/avadhoot5';

// const user = fetch(GITHUB_URL);

// // console.log('Before then', user);

// user.then((a) => {
//     console.log(a)
// });




