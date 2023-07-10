// YOUR CODE BELOW

// function isPalindrome(aStr) {
    

//     if (aStr.length <= 1) {
//         return true;
//     }

//     const firstCharacter = aStr[0];
//     const lastCharacter = aStr[aStr.length - 1];

//     if (firstCharacter === lastCharacter) {
//         return isPalindrome(aStr.slice(1, -1));
//     } else {
//         return false;
//     }

// };

// console.log(isPalindrome("race"));




function flattenArray(nestedArray) {
    let flatArray = 0;

    for (let i = 0; i < nestedArray.length; i++) {
        const element = nestedArray[i];

        if (Array.isArray(element)) {
            flatArray += flattenArray(element);
        } else {
            flatArray += element;
        }
    }

    return flatArray;
}


let array = [1, [2, 3, [4, 5, 6, [7, 8, 9 ]]]]

console.log(flattenArray(array));