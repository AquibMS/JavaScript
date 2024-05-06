// Given an array of integer numbers and integer target
// return the indices of two numbers which adds up to the target

//brute force
// const twoSum = function(nums, target){
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1 ; j < nums.length; j++){
//             if(nums[i] + nums[j] === target) return [i,j];
//         }
//     }
// };

// console.log(twoSum([2,7,11,15], 9));

// const twoSum = function(nums, target){
//     var obj = {}

//     for(let i = 0 ; i < nums.length ; i++){
//         var n = nums[i];

//         if(obj[target - n] >= 0){
//             return [obj[target-n], i];
//         } else {
//             obj[n] = i;
//         }
//     }
// };

// console.log(twoSum([2,7,11,15], 26));

// function Search(mat,n,x){
//     let i = 0, j = n-1;
//     while(i < n && j >= 0){
//         if(mat[i][j] == x){
//            console.log("Element found at " +
//                                     i + " " + j);
//             return;
//         }
//         if(mat[i][j] > x)
//             j--;
//         else
//             i++;
//     }
//     console.log("element not found");
//     return;
// };
// let mat =     [[10, 20, 30, 40 ],
// [ 15, 25, 35, 45 ],
// [ 27, 29, 37, 48 ],
// [ 32, 33, 39, 50 ]];

// Search(mat, 4, 29);