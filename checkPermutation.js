/*Given two strings, write a method to decide if one is permutation of the other */
function isPermutation(firstString, secondString) {

    if (typeof firstString != 'string' || typeof secondString != 'string') {
        throw new Error('Invalid type!');
    }

    //If the spaces and case sensitive does not matter lets remove it to a clean string.
    let cleanFirstString = firstString.replace(/\s/g, '').toLowerCase();
    let secondCleanString = secondString.replace(/\s/g, '').toLowerCase();

    //if they have different sizes they can't be a permutation of each other
    if (cleanFirstString.length != secondCleanString.length) {
        return false;
    }

    return sortString(cleanFirstString) == sortString(cleanFirstString);

}

function sortString(passedString) {
    return passedString.split('').sort().join('');
}

//implementation with an array that serves as a map
function isPermutation1(firstString, secondString) {

    if (typeof firstString != 'string' || typeof secondString != 'string') {
        throw new Error('Invalid type!');
    }

    //If the spaces and case sensitive does not matter lets remove it to a clean string.
    const cleanFirstString = firstString.replace(/\s/g, '').toLowerCase();
    const secondCleanString = secondString.replace(/\s/g, '').toLowerCase();

    //considering ASCII table
    const charArray = new Array(128);
    charArray.fill(0, 0, 128)

    //map the char and increase for each letter
    for (let i = 0; i < cleanFirstString.length; i++) {
        charArray[cleanFirstString.charCodeAt(i)]++;
    }

    //decrease on each letter
    for (let i = 0; i < secondCleanString.length; i++) {
        charArray[secondCleanString.charCodeAt(i)]--;
        if (charArray[secondCleanString.charCodeAt(i)] < 0) {
            return false;
        }
    }

    return true;
}

//test
try {
    console.log(`${isPermutation('aB c d', 'd bca')} => true`);
    console.log(`${isPermutation('aB c d', 'd bdca')} => false`);
    console.log(`${isPermutation('aB c dgedmma', 'ammde dgca b')} => true`);
    console.log(`${isPermutation('aB c dgedma', 'ammde dgca b')} => false`);

    console.log('-------------------------------------------')

    console.log(`${isPermutation1('aB c d', 'd bca')} => true`);
    console.log(`${isPermutation1('aB c d', 'd bdca')} => false`);
    console.log(`${isPermutation1('aB c dgedmma', 'ammde dgca b')} => true`);
    console.log(`${isPermutation1('aB c dgedma', 'ammde dgca b')} => false`);

} catch (err) {
    console.log(err)
}