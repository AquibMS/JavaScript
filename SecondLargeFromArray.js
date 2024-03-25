//print the second largest number from the array.

// function secondLargest(arr){
//     const uniqueArray = Array.from(new Set(arr));

//     uniqueArray.sort((a,b) => b-a);

//     if(uniqueArray.length >= 2) {
//         return uniqueArray[1];
//     } else {
//         return -1;
//     }
// }

// console.log(secondLargest([10,5,10]));

//optimised code

function secondLargest(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargestNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            secondLargestNumber = largest;
            largest = arr[i];
        } else if(arr[i] != largest && arr[i] > secondLargestNumber){
            secondLargestNumber = arr[i];
        }
    }
    return secondLargestNumber;
}

console.log(secondLargest([12,35,1,10,34,1]));