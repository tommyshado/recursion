// YOUR CODE BELOW

function countVowels(string) {
    let vowels = "AEIOUaeiou";

    if (!string.length) return 0;

    const firstCharacter = string[0];

    if (vowels.indexOf(firstCharacter) !== -1) 
    {
        return 1 + countVowels(string.slice(1));
    } else {
        return countVowels(string.slice(1));
    };
};