/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
//     let a = prices[0];
//     let biggestValue = 0;
    
//     prices.forEach((price, index)=>{
//         if (a < price) {
//             let temp = price - a 
//             if (temp > biggestValue){
//                 biggestValue = temp
//             }
//         }
//         else {
//             a = price
//         }    
//     })
//     return biggestValue
    
    
    
    let left = 0;
    let right = 1;
    let bigValue = 0;
    
    while (right < prices.length){
        
        if (prices[left] < prices[right]){
            if (prices[right] - prices[left] > bigValue){
                bigValue = prices[right] - prices[left]
            }
        }
        else left = right
    right ++
    }
    return bigValue;
};