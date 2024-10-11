var number = parseInt(prompt("Enter the starting number:"));
var number2 = parseInt(prompt("Enter the ending number:"));
var arr=[2];

for (var i = number; i <= number2; i++) {
    if (i <= 1) {
        continue; 
    }
    if (i === 2) {
        continue;
    }
    var isPrime = true; 
    for (var j = 2; j <i; j++) {
        if (i % j === 0) {
            isPrime = false; 
            break;
        }
    }
    if (isPrime) {
        arr.push(i);
    }
}
console.log(arr);