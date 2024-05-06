// Given n request ids as an array of strings, requests and an integer k, after all requests are received, find the k most recent requests. Report the answer in order of most recent to least recent.

// Ex: Suppose n = 5, requests = ["item1", "item2","item3","item1","item3"], and k = 3.
// Result is ["item3","item1","item2"]

function findRecentRequests(requests, k){
    const uniqueRequests = new Set();
    const result = [];

    for(let i = requests.length - 1 ; i >= 0 ; i--){
        if(!uniqueRequests.has(requests[i])){
            result.push(requests[i]);
            uniqueRequests.add(requests[i]);
        }
        if(result.length === k){
            break;
        }
    }
    return result;
}

const requests = ["item1", "item2","item3","item1","item3"];
const k = 3;
console.log(findRecentRequests(requests,k));