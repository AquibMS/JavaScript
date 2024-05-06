// Implement a simple prototype service to find the difference between two JSON objects.
// To keep the prototype simple, a JOSN will contain only key-value pairs and no nested objects or arrays in it. Given two JSON strings, json1 and json2, find the list of keys for which the values are different. If a key is present in only one of the JSONs, it should not be considered in the result. The list of keys should be sorted in lexicographically ascending order.
// Ex: Suppose json1 = "{"hello":"world","hi":"hello","you":"me"}" and json2 = "{"hello":"world","hi":"helloo","you":"me"}"
// The only common key where the values differ is "hi". Hence the  answer is ["hi"]

function DiffValueKeys(json1, json2){
    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);

    const differingKeys = [];

    for(let key in obj1){
        if(obj2.hasOwnProperty(key)){
            if(obj1[key] !== obj2[key]){
                differingKeys.push(key);
            }
        }
    }
    differingKeys.sort();
    return differingKeys;
}

const json1 = '{"hello":"world","hi":"hello","you":"me"}';
const json2 = '{"hello":"world","hi":"helloo","you":"me"}';
console.log(DiffValueKeys(json1, json2));