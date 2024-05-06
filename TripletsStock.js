// The cost of a stock on each day is given in an array, arr. An investor wants to buy the stocks in triplets such that the sum of the cost for the three days is divisible by debugger. The goal is to find the number of distint triplets (i,j,k) such that i < j < k and the sum of (a[i] + a[j] + a[k]) is divisible by debugger.

// Ex: let arr, prices of stock = [3,3,4,7,8] and d = 5, the triplets whose sum is divisible by d is below

// triplets with indices - (1,2,3) => sum = 3+3+4 => 10
// triplets with indices - (1,3,5) => sum = 3+4+8 => 15
// triplets with indices - (2,3,4) => sum = 3+4+8 => 15

// Hence the answer is 3.

// function countTriplets(arr,d){
//     let count = 0;
//     const n = arr.length;
//     for(let i = 0 ; i < n-2 ; i++){
//         for(let j = i+1 ; j < n-1 ; j++){
//             for(let k = j+1 ; k < n ; k++){
//                 if((arr[i]+arr[j]+arr[k]) % d === 0) count++;
//             }
//         }
//     }
//     return count;
// }

// const arr = [3,3,4,7,8];
// const d = 5;
// console.log(countTriplets(arr,d));

// //Time complexity = O(n^3);

function countTriplets(arr,d){
    const remainderMap = new Map();
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const remainder = arr[i] % d;
        if(remainderMap.has(remainder)){
            remainderMap.set(remainder, remainderMap.get(remainder) + 1);
        } else {
            remainderMap.set(remainder,1);
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1 ; j < arr.length ; j++){
            const remainder = (arr[i] + arr[j]) % d;
            const compliment = (d - remainder) % d;
            if(remainderMap.has(compliment) && j > i){
                count += remainderMap.get(compliment);
            }
        }
    }
    return count;
}

const arr = [3,3,4,7,8];
const d = 5;
console.log(countTriplets(arr,d));