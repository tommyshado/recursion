// YOUR CODE BELOW

function getLongestName(anObject) {
    let longestName = "";
    let familyNames = Object.keys(anObject);
    
    familyNames.forEach(function(name) {

        if (name.length >= longestName.length) {
            longestName = name;
        };

        // this is the case where name is an object
        if (anObject[name]) {
            const longestSubName = getLongestName(anObject[name]);

            if (longestSubName.length >= longestName.length) {
                longestName = longestSubName;
            };
        };

    });

    return longestName;
};

let family = {
    'Beverly Marquez': {
        'Nina Rhone': {
        'William Rhodes': null,
        'Paul Nell': null,
        'Sir Paddington the Fourth, of the county Wilstonshire': null
        }
    }
};

console.log(getLongestName(family));