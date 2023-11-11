// YOUR CODE BELOW

function isPalindrome(aStr) {
    
    if (aStr.length <= 1) {
        return true;
    };

    const firstCharacter = aStr[0];
    const lastCharacter = aStr[aStr.length - 1];

    if (firstCharacter === lastCharacter) {
        return isPalindrome(aStr.slice(1, -1));
    } else {
        return false;
    };

};
