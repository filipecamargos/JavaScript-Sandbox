/*Write a function that, given a string of letters, returns true or false for whether the letters in the string could be arranged to
form a palindrome. E.g. For “torro”, the answer is True, because the letters can be rearranged to spell “rotor”*/

//Given a letter string
function schamblePalindrome(testString) {
    //Validations
    if (typeof testString !== 'string') {
        return 'Please Enter a valid string';
    }

    //Character count approach
    const stringChar = testString.split('');
    //Create a map of key and value with the char and the quantity
    const mapOfChar = new Map();
    for (let i of stringChar) {
        if (mapOfChar.has(i)) {
            mapOfChar.set(i, mapOfChar.get(i) + 1)
        } else {
            mapOfChar.set(i, 1);
        }
    }

    //Only one even checker
    let onlyOneEven = 0;
    for (let [key, value] of mapOfChar) {
        if (value % 2 == 1) {
            onlyOneEven++;
        }
        if (onlyOneEven > 1) {
            return false;
        }
    }

    return true;  
}

//Test
console.log(`${schamblePalindrome('torro')} => true`);
console.log(`${schamblePalindrome('aab')} => true`);
console.log(`${schamblePalindrome('abd')} => false`);
console.log(`${schamblePalindrome('abda')} => false`);
console.log(`${schamblePalindrome('bbaaddc')} => true`);