// IBM Coding question - General Software Developer
// for each element of an array, a counter is set to 0. The element is compared to each element to its left. If the element to the left is greater, then absolute difference is subtracted from the counter. If the element to the left is smaller, the absolute difference is added to the counter. For each element of the array, determine the value of the counter. These values should be stored in an array and returned.
// Ex: n = 3, the number of elements
// arr = [2,4,3]
// The answer array is [0,2,0]

function CounterArray(arr){
    const resultArray = new Array(arr.length).fill(0);
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < i ; j++){
            const difference = Math.abs(arr[j] - arr[i]);
            if(arr[j] > arr[i]){
                resultArray[i] -= difference;
            } else {
                resultArray[i] += difference;
            }
        }
    }
    return resultArray;
}

const array = [2,1,3];
const output = CounterArray(array);
console.log(output)