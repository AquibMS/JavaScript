// Rotate an array by K times
// [1,2,3,4,5,6,7] & K = 3 => [5,6,7,1,2,3,4]

function rotateArray(arr, k){
    let size = arr.length;
    if( k > size){
        k = k % size;
    }
    // const rotated = arr.splice(size-k, size);
    // arr.unshift(...rotated);
    // return arr;
    reverse(arr, 0, arr.length-1);
    reverse(arr, 0, k-1);
    reverse(arr, k, arr.length-1);

    return arr;
}
// console.log(rotateArray([1,2,3,4,5,6,7], 3));

function reverse(arr, left, right){
    while(left < right){
        const temp = arr[left];
        arr[left++] = arr[right]
        arr[right--] = temp
    }
}

console.log(rotateArray([1,2,3,4,5,6,7], 4));