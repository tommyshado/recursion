// YOUR CODE BELOW

// log the last character first then...
// log the second last character and 
// continue loging the character while the are still characters in the string

function backwardString(string) {
    if (string.length === 1) {
        // just log the string
        return string;
    } else {
        // log the last character
        console.log(string[string.length - 1]);
        // remove the last character in the string and...
        let lastChar = string.slice(0, -1);
        // set the string starting at the zero character through the second last character as the function argument
        return backwardString(lastChar);
    };
};