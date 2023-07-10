// YOUR CODE BELOW


function sumNums(num) {
    // when a number is less than 1 return the number - base case
    if (num <= 1) {
        return num;
    } else {
        // recursive case
        // get closer to the base case then...
        // add the number everytime
        return num + sumNums(num - 1);
    };
};