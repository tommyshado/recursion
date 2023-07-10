// YOUR CODE BELOW

function theTruthCounts(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        const elementOrArray = array[i];

        if (Array.isArray(elementOrArray)) {
            count += theTruthCounts(elementOrArray);

        } else if (elementOrArray) {
            count++;
        };
    };

    return count;
};

console.log(theTruthCounts([0, 1, false, 10, [true, false, [true], ['yes']]]));