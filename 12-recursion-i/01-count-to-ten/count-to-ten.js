// YOUR CODE BELOW

function countToTen(num) {
    // create a stop condition or base case then...
    if (num >= 10) {
        // log the number
        console.log(num);
    } else {
        // if the number is less than 10 then... have a recursive case
        // log the number
        console.log(num);
        // call the number using the function and increment the number by 1
        return(countToTen(num + 1));
    };
};