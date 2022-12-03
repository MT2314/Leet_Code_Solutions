/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a;
    let b;
    let temp;
    
    nums.some((num,index,arr)=>{

          for (let i = index; i < arr.length;i++){
                if(arr[i] + num === target && i != index) {
                 a = index
                 b = i
                    break
             }
          }
        a+b === target
    })

    return[a,b]
};