/*
  Given an array of stock prices where the indices are days and the values are the highest price of the stock that day, write a program to determine the maximum profit you could have made by making a single purchase and a single sale of a single stock. You must buy before you sell.
  Array: [100, 180, 260, 310, 40, 280, 695]
*/

const exampleArray = [100, 180, 260, 310, 40, 280, 695];

const maxProfit = (array = []) => {
  let totalProfit = 0;
  let lowestPrice = array[0];
  let highestPrice = array[0];

  for (const price of exampleArray) {
    if (price < lowestPrice) {
      lowestPrice = price;
    }
    if (price > highestPrice) {
      highestPrice = price;
    }
    if ((highestPrice - lowestPrice) > totalProfit) {
      totalProfit = highestPrice - lowestPrice;
    }
  }

  return totalProfit;
};

console.log('max profit => ', maxProfit(exampleArray));

module.exports = maxProfit;
