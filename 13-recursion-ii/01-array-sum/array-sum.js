// YOUR CODE BELOW


// Write a function, arraySum, that accepts an array of numbers and returns the sum
// of all the numbers in the array (no matter how nested!).

function arraySum(nestedArray) {
    // create a variable to store the sum and set it to 0
    let sum = 0;
    // iterate over the length of the nestedArray variable then...
    for (let i = 0; i < nestedArray.length; i++) {
        // grab the current element at [i] and...
        const numberOrArray = nestedArray[i];
        // check if the current element at [i] is an array,
        if (Array.isArray(numberOrArray)) {
            // then add the sub element in the array, using recursion
            sum += arraySum(numberOrArray);
        };
        // otherwise, add the current element at [i]
        sum += numberOrArray;
    };
    // outside the loop return the sum variable 
    return sum;
};