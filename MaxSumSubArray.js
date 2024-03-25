//Given an array of integers, find the subarray with the largest sum and return its sum.
// Input: [-2,1,-3,4,-1,2,1,-5,4] ==============> Output: 6, [4,-1,2,1]
// Input: [5,4,-1,7,8] =========================> Output: 23, [5,4,-1,7,8]

// function maxSubArray(arr){
//     let maxSum = arr[0];
//     let StartIndex = 0;
//     let EndIndex = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let currentSum = 0;
//         for(let j = i; j < arr.length; j++){
//             currentSum = currentSum + arr[j]; // addition of [-2,1],[-2,1,-3],[-2,1,-3,4].....
//             if(currentSum > maxSum){
//                 maxSum = currentSum;
//                 StartIndex = i;
//                 EndIndex = j
//             }
//         }
//     }
//     return {
//         sum: maxSum,
//         subArray: arr.slice(StartIndex, EndIndex+1),
//     };
// };

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

//Kadane's Algorithm

function maxSubArray(arr){
    let sum = 0;
    let maxSum = arr[0];

    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
        if(sum > maxSum){
            maxSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));