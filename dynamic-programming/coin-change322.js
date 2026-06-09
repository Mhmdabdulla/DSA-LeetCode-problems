//Think processing
//draw decision tree. for all coins with all values for top down and bottom up
//top-down: recursive dfs, for amount, branch for each coin, cache to store prev coin_count for each amount;
//bottom-up: compute coins for amount = 1, up until n, using for each coin (amount - coin), cache prev values


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array.from({length:amount+1},()=>amount+1);
    dp[0]=0;
    for(let value=1;value<=amount;value++){
        for(let c of coins){
            if(value-c >=0){
                dp[value] = Math.min(dp[value], 1+dp[value-c])
            }
        }
    }
    return dp[amount] !== amount+1 ? dp[amount] : -1
};