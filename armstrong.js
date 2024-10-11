function isArmstrongNumber(num) {
    let originalNum = num;
    let numDigits = 0;
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        temp = Math.floor(temp / 10);
        numDigits++;
    }

    temp = num;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === originalNum;
}



console.log(isArmstrongNumber(1634))
console.log(isArmstrongNumber(54742))