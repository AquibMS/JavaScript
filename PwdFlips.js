function flips(pwd){
    let count = 0;
    for (let i = 0; i < pwd.length; i += 2) {
        if(pwd[i] != pwd[i+1]){
            count++;
        }
    }
    return count;
}

var password = '100110';
var result = flips(password);
console.log(result);