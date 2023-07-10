// YOUR CODE BELOW

function reverseArray(array) {
    // grab the last character in the array
    // set the last character to be the first character in the array
    // grab the second last character in the array
    // set the second last character in the array to be the second character in the array

    if (array.length === 1) {
        return array;

    } else {
        const lastElement = array[array.length - 1];

        return [lastElement].concat(reverseArray(array.slice(0, -1)));
    };
};

console.log(reverseArray([1, 2, 3, 5]));