/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let a = prices[0];
    let biggestValue = 0;
    
    prices.forEach((price, index)=>{
        if (a < price) {
            let temp = price - a 
            if (temp > biggestValue){
                biggestValue = temp
            }
        }
        else {
            a = price
        }    
    })
    return biggestValue
};