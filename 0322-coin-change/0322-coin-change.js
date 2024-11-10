/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


var coinChange = function(coins, amount) {
    const dp = Array.from({length: amount + 1}, () => Infinity);
    dp[0] = 0;
    // 1원부터 amount원까지 만들 수 있는 모든 경우의 수를 만듦
    for(let money = 1; money <= amount; money++) {
        for(let coin of coins) {
            if(money - coin >= 0) {
                 // money - coin가 Infinity가 아니면 만들 수 있는 값이고 해당 횟수를 채울 수 있음
                dp[money] = Math.min(dp[money], dp[money-coin] + 1);
            }
        }
    }


    return dp[amount] !== Infinity ? dp[amount] : -1;
};