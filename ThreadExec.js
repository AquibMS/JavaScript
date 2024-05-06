function getTotalExecTime(n, logs){
    const result = new Array(n).fill(0);
    let stack = [];
    let prevTime = 0;

    for(let log of logs){
        const[functionIdStr, action, timestampStr] = log.split(':');
        const functionId = parseInt(functionIdStr);
        const timeStamp = parseInt(timestampStr);

        if(action === 'start'){
            if(stack.length > 0) {
                result[stack[stack.length - 1]] += timeStamp - prevTime;
            }
            stack.push(functionId);
            prevTime = timeStamp;
        } else {
            result[stack.pop()] += timeStamp - prevTime + 1;
            prevTime = timeStamp + 1;
        }
    }
    return result;
}

const n = 3;
const logs = [
    "0:start:0",
    "1:start:2",
    "2:start:3",
    "2:end:4",
    "1:end:5",
    "0:end:6"
];

const executionTimes = getTotalExecTime(n, logs);
console.log(executionTimes);