function OddEven(arr) {
    for (let j = 0; j < arr.length; j++) {
        arr[j] = (arr[j] % 2 === 0) ? (arr[j] - 3) : (arr[j] + 3);
    }
    return arr;
}

// Example usage
const arr = [3, 4, 9];
console.log(OddEven(arr)); // Output: [6, 1, 12]