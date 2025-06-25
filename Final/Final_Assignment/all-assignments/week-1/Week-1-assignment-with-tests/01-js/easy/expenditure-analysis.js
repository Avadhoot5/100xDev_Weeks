/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = {};
  transactions.forEach((transaction) => {
    const {category, price} = transaction;
    if (ans[category]) {
      ans[category] += price;
    } else ans[category] = price;
  })
  
  let output = [];
  for (let i in ans) {
    output.push({category: i, totalSpent: ans[i]});
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
