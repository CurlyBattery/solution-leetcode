function maxProfit(prices: number[]): number | void {
    let max = 0;
    let min = Infinity;

    for(let price of prices) {
        if(price < min) {
            min = price;
        }

        if(price - min > max) {
            max = price - min;
        }
    }

    return max;
}

console.log(maxProfit([7,1,5,3,6,4]))