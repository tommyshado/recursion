// YOUR CODE BELOW


function sumDigits(digits) {
    let stringDigits = digits.toString();

    if (stringDigits.length === 1) {
        return Number(stringDigits);
    } else {
        const firstChar = stringDigits[0];
        
        return Number(firstChar) + sumDigits(Number(stringDigits.slice(1)));
    }
}

console.log(sumDigits(12));