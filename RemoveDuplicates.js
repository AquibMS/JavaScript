// Remove duplicates from sorted array
// Given an array of integers sorted in non-descending order, remove the duplicates in-place such that each unique element appears only once. The relative order of the element should be kept the same. Then return the number of unique elements in the array.

//Input: [1,2,2] ===========> Output: 2, [1,2,_]
//Input: [0,0,1,1,1,2,2,3,3,4] ===> Outpue: 5, [0,1,2,3,4,_,_,_,_,_]

function removeDuplicates(arr){
    for(let i = 0 ; i < arr.length-1 ; i++){ //Time complexity: O(n)
        if(arr[i] == arr[i+1]){              //Space complexity: O(1)
            arr.splice(i+1, 1);
            i--;
        }
    }
    return arr.length;
};
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
// console.log(removeDuplicates([1,2,2]));

//the below approach used two pointers methods and returns the value of 'i'
//it compares the value of arr[i] with arr[j] at each increment of j, if equals increment only j, if not increment both i & j and move the arr[j] to arr[i]th position and at the end return the value of i+1
function remDuplicate(arr){
    if(arr.length == 0) return 0;
    let i = 0;
    for(let j = 1 ; j < arr.length ; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
};
console.log(remDuplicate([0,0,1,1,1,2,2,3,3,4]));
console.log(remDuplicate([1,2,2]));