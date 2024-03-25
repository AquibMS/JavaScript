// Best time to buy and sell stocks
// you are given an array prices where prices[i] is the price of the given stock on ith day
// you want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in future to sell the stock
// return the max profit, if you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]; -----> Output: 5;
// Input: prices = [7,6,4,3,1]; -----> Output: 0;

//Brute Force approach

// function maxProfit(prices){
//     let globalProfit = 0;

//     for(let i = 0 ; i< prices.length - 1 ; i++){
//         for(let j = i + 1 ; j < prices.length ; j++){
//             const currentProfit = prices[j] - prices[i];
//             if(currentProfit > globalProfit) globalProfit = currentProfit;
//         }
//     }
//     return globalProfit;
// }
// console.log(maxProfit([7,6,4,3,1]));

//Greedy Algorithm

const maxProfit = function(prices){
    let minStockPrices = prices[0] || 0;
    let profit = 0;

    for(let i = 0 ; i < prices.length ; i++){
        if(prices[i] < minStockPrices){
            minStockPrices = prices[i];
        }
        profit = Math.max(profit, prices[i] - minStockPrices);
    }

    return profit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));