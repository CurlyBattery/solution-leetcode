maxProfit([1,2,3,4,5]);

function maxProfit(prices: number[]): number {
    let profit = 0;
    for (let i = prices.length - 1; i >= 1; i--) {
        console.log(prices[i]);
        console.log(`prices[i - 1] ${prices[i - 1]}`);
        if(prices[i] - prices[i - 1] > 0) {
            profit += prices[i] - prices[i - 1]   ;
        }
    }
    return profit;
}
